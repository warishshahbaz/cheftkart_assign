const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    images: {
        type: [String], // Array of image URLs
        required: true
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
