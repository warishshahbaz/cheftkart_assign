const User = require('../models/user');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ messages: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new user
exports.createAllUsers = async (req, res) => {
    const { name, mobile_number, address, post_count } = req.body;

    try {
        const payLoad = { name, mobile_number, address, post_count };
        if (!name || !mobile_number) {
            return res.status(400).json({ message: 'Name and mobile number are required' });
        }
        const users = await User.create(payLoad);
        return res.status(201).json({ message: users });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
