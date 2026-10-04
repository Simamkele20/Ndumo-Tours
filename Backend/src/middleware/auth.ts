import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

interface JWTPayload extends JwtPayload {
  id: number;
  email: string;
  isAdmin: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

const getSecret = (): Secret => {
  return process.env.JWT_SECRET || 'secret';
};

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, getSecret()) as JWTPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export function verifyAdmin(req: Request, res: Response, next: NextFunction) {
  verifyToken(req, res, () => {
    if (!req.user?.isAdmin) {
      return res.status(403).json({ error: 'Access denied: Admin only' });
    }
    next();
  });
}

export default verifyToken;
