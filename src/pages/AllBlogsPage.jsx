import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import { getAllBlogs } from '../api/blogs';
import toast from 'react-hot-toast';

const AllBlogsPage = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await getAllBlogs();
                setBlogs(res.data);
            } catch (err) {
                console.error(err);
                toast.error('Failed to load blogs');
            }
        };

        fetchBlogs();
    }, []);

    // Optional: handleEdit if you want to route to /editor/:id
    const handleEdit = (blogId) => {
        navigate(`/editor/${blogId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white pt-20">
            <div className="p-6 max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">All Blogs</h2>
                    <button
                        onClick={() => navigate('/editor')}
                        className="bg-yellow-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
                    >
                        Write New Blog
                    </button>
                </div>

                {/* This component will render published & drafts separately */}
                <BlogList blogs={blogs} onEdit={handleEdit} />
            </div>
        </div>
    );
};

export default AllBlogsPage;
