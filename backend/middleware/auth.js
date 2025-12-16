// middleware/auth.js
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    // 1. Get token from header (usually 'x-auth-token' or 'Authorization: Bearer <token>')
    const token = req.header('x-auth-token');

    // 2. Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // 3. Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Add user from payload to request object
        // The payload is often structured { user: { id: '...', role: '...' } }
        req.user = decoded.user;
        next();
        
    } catch (err) {
        // This handles expired, invalid signature, or malformed tokens
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default auth;