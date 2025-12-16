// routes/authRoutes.js
import express from 'express';
// Note: express-validator is used for proper validation
// import { check } from 'express-validator'; 
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// @route   POST api/auth/register
// @desc    Register user
router.post(
    '/register',
    // In a real app, validation checks go here
    registerUser
);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
router.post(
    '/login',
    // In a real app, validation checks go here
    loginUser
);

export default router;