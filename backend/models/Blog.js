const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    tags: [String],
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
