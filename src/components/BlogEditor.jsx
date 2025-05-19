import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { saveDraft, publishBlog, getBlogById } from '../api/blogs';

const BlogEditor = ({ existingBlog }) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [lastSaved, setLastSaved] = useState(null);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    // Load blog from existingBlog prop or API
    useEffect(() => {
        if (existingBlog) {
            setTitle(existingBlog.title ?? '');
            setContent(existingBlog.content ?? '');
            setTags(existingBlog.tags ? existingBlog.tags.join(', ') : '');
        } else if (id) {
            getBlogById(id)
                .then(data => {
                    console.log(data.data.title)
                    setTitle(data.data.title ?? '');
                    setContent(data.data.content ?? '');
                    setTags(data.data.tags ? data.data.tags.join(', ') : '');
                })
                .catch(() => {
                    toast.error('Failed to load blog for editing');
                });
        }
    }, [existingBlog, id]);

    // Auto-save logic
    const handleAutoSave = async () => {
        if (title?.trim() || content?.trim()) {
            try {
                await saveDraft({
                    id,
                    title,
                    content,
                    tags: tags.split(',').map(tag => tag.trim()),
                });
                const time = new Date().toLocaleTimeString();
                setLastSaved(time);
                toast.success(`Auto-saved at ${time}`, { duration: 2000 });
            } catch (error) {
                toast.error('Auto-save failed');
                console.error(error);
            }
        }
    };

    useEffect(() => {
        const timer = setInterval(handleAutoSave, 30000);
        return () => clearInterval(timer);
    }, [title, content, tags]);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            handleAutoSave();
        }, 5000);
        return () => clearTimeout(timeoutRef.current);
    }, [title, content, tags]);

    const handleManualSave = async () => {
        await handleAutoSave();
    };

    const handlePublish = async () => {
        try {
            await publishBlog({
                id,
                title,
                content,
                tags: tags.split(',').map(tag => tag.trim()),
            });
            toast.success('Blog published!');
            navigate('/blogs');
        } catch (error) {
            toast.error('Failed to publish');
            console.error(error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white/10 text-white p-6 rounded-xl border border-white/20 shadow-md backdrop-blur">
            <h2 className="text-3xl font-bold mb-4">Write Your Blog</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-4 p-3 bg-white/20 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <textarea
                rows="10"
                placeholder="Write your blog content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full mb-4 p-3 bg-white/20 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>

            <input
                type="text"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full mb-4 p-3 bg-white/20 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <div className="flex gap-4">
                <button
                    onClick={handleManualSave}
                    className="bg-gray-300 text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-400 transition"
                >
                    Save as Draft
                </button>

                <button
                    onClick={handlePublish}
                    className="bg-yellow-300 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
                >
                    {id ? 'Update Blog' : 'Publish'}
                </button>

                <button
                    onClick={() => navigate('/blogs')}
                    className="bg-red-300 text-black px-6 py-2 rounded-md font-semibold hover:bg-red-400 transition"
                >
                    Show All Blogs
                </button>
            </div>

            {lastSaved && (
                <p className="text-sm text-white/80 mt-2">
                    Auto-saved at {lastSaved}
                </p>
            )}
        </div>
    );
};

export default BlogEditor;
