const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts
router.get('/', postController.getAllPosts);

// Create a new post
router.post('/', postController.createPost);

// Edit a post
router.put('/:id', postController.editPost);

// Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router;
