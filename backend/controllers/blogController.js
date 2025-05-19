const Blog = require('../models/Blog');

exports.saveDraft = async (req, res) => {
    const { title, content, tags, id } = req.body;
    const userId = req.user.id;

    try {
        const blog = id
            ? await Blog.findByIdAndUpdate(id, { title, content, tags, status: 'draft' }, { new: true })
            : await Blog.create({ title, content, tags, status: 'draft', author: userId });
        res.json(blog);
    } catch (err) {
        res.status(500).send('Error saving draft');
    }
};

exports.publishBlog = async (req, res) => {
    const { title, content, tags, id } = req.body;
    const userId = req.user.id;

    try {
        const blog = id
            ? await Blog.findByIdAndUpdate(id, { title, content, tags, status: 'published' }, { new: true })
            : await Blog.create({ title, content, tags, status: 'published', author: userId });
        res.json(blog);
    } catch (err) {
        res.status(500).send('Error publishing blog');
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name');
        res.json(blogs);
    } catch (err) {
        res.status(500).send('Error fetching blogs');
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.json(blog);
    } catch (err) {
        res.status(404).send('Blog not found');
    }
};
