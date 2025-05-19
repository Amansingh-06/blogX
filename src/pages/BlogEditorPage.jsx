import React from 'react';
import BlogEditor from '../components/BlogEditor';
import { saveDraft, publishBlog } from '../api/blogs';
import toast from 'react-hot-toast';

const BlogEditorPage = () => {
    // Save draft to backend
    const handleSave = async (blog) => {
        try {
            await saveDraft(blog);
            toast.success('Draft saved!');
        } catch (err) {
            console.error(err);
            toast.error('Failed to save draft');
        }
    };

    // Publish blog to backend
    const handlePublish = async (blog) => {
        try {
            await publishBlog(blog);
            toast.success('Blog published!');
        } catch (err) {
            console.error(err);
            toast.error('Failed to publish blog');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-6 pt-20">
            <BlogEditor onSave={handleSave} onPublish={handlePublish} />
        </div>
    );
};

export default BlogEditorPage;
