import { Request, Response } from 'express';
import pool from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { ApiError } from '../middleware/errorHandler.js';
import { RowDataPacket, OkPacket } from 'mysql2/promise';

interface User extends RowDataPacket {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  phone?: string;
  is_admin: boolean;
}

export async function register(req: Request, res: Response) {
  try {
    const { email, password, name, phone } = req.body;

    // Validation
    if (!email || !password || !name) {
      throw new ApiError(400, 'Email, password, and name are required');
    }

    if (!validator.isEmail(email)) {
      throw new ApiError(400, 'Invalid email format');
    }

    if (password.length < 8) {
      throw new ApiError(400, 'Password must be at least 8 characters');
    }

    // Check if user exists
    const [existingUsers] = await pool.query<RowDataPacket[]>('SELECT id FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      throw new ApiError(409, 'User already exists with this email');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const [result] = await pool.query<OkPacket>(
      'INSERT INTO users (email, password_hash, name, phone, is_admin) VALUES (?, ?, ?, ?, ?)',
      [email, hashedPassword, name, phone || null, false]
    );

    // Fetch the created user
    const [users] = await pool.query<User[]>('SELECT id, email, name FROM users WHERE id = ?', [result.insertId]);
    const user = users[0];

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, isAdmin: false },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      user,
      token,
    });
  } catch (err) {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    console.error('Register error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      throw new ApiError(400, 'Email and password are required');
    }

    // Find user
    const [results] = await pool.query<User[]>(
      'SELECT id, email, password_hash, name, is_admin FROM users WHERE email = ?',
      [email]
    );

    if (results.length === 0) {
      throw new ApiError(401, 'Invalid email or password');
    }

    const user = results[0];

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      throw new ApiError(401, 'Invalid email or password');
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, isAdmin: user.is_admin },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.is_admin,
      },
      token,
    });
  } catch (err) {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function refreshToken(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      throw new ApiError(400, 'Refresh token required');
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || 'secret');

    const token = jwt.sign(
      { id: decoded.id, email: decoded.email, isAdmin: decoded.isAdmin },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.status(200).json({ token });
  } catch (err) {
    console.error('Refresh token error:', err);
    res.status(401).json({ error: 'Invalid refresh token' });
  }
}
