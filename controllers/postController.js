const Post = require('../models/post');
const User = require('../models/user');

// Get all posts of users
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user_id', 'name mobile_number');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    const { title, description, user_id, images } = req.body;

    try {
        const post = new Post({
            title,
            description,
            user_id,
            images
        });

        await post.save();

        // Update the post count for the user
        const user = await User.findById(user_id);
        user.post_count += 1;
        await user.save();

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit a post
exports.editPost = async (req, res) => {
    const { id } = req.params;
    const { title, description, images } = req.body;

    try {
        const post = await Post.findById(id);

        if (!post) return res.status(404).json({ message: 'Post not found' });

        post.title = title || post.title;
        post.description = description || post.description;
        post.images = images || post.images;

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        if (!post) return res.status(404).json({ message: 'Post not found' });

        await post.remove();

        // Update the post count for the user
        const user = await User.findById(post.user_id);
        user.post_count -= 1;
        await user.save();

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
