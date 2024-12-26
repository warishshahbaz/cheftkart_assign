const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 256
    },
    mobile_number: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        default: ''
    },
    post_count: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
