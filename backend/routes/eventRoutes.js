// routes/eventRoutes.js
import express from 'express';
import auth from '../middleware/auth.js'; // Import the auth middleware

const router = express.Router();

// @route   POST api/events
// @desc    Create a new event (Protected route)
// @access  Private (Requires a valid JWT)
router.post('/', auth, (req, res) => {
    // req.user is now available, thanks to the 'auth' middleware
    const { id, role } = req.user;
    
    // Simple Role-Based Access Control (RBAC) check
    if (role !== 'organizer' && role !== 'admin') {
        return res.status(403).json({ msg: 'Forbidden: Only organizers can create events' });
    }
    
    res.json({ 
        msg: `Event created successfully by user ID: ${id} (Role: ${role})`,
        eventData: req.body
    });
});

// @route   GET api/events/me
// @desc    Get current user's details (Protected route)
// @access  Private
router.get('/me', auth, async (req, res) => {
    // Use req.user.id to fetch specific user data if needed
    // Example: const user = await User.findById(req.user.id).select('-password');
    res.json({
        msg: `Welcome, you are logged in. Your ID is ${req.user.id}.`,
        role: req.user.role
    });
});

export default router;