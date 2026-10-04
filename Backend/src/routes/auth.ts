import { Router } from 'express';
import { register, login, refreshToken } from '../controllers/auth.js';

const router = Router();

// POST /auth/register - Register new user
router.post('/register', register);

// POST /auth/login - Login user
router.post('/login', login);

// POST /auth/refresh - Refresh JWT token
router.post('/refresh', refreshToken);

export default router;
