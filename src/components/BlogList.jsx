import React from 'react';


const BlogList = ({ blogs, onEdit }) => {
    const publishedBlogs = blogs.filter((blog) => blog.status === 'published');
    const draftBlogs = blogs.filter((blog) => blog.status === 'draft');

    return (
        <div className="max-w-4xl mx-auto mt-10 text-white space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-3">Published Blogs</h2>
                {publishedBlogs.length ? publishedBlogs.map((blog, i) => (
                    <div key={i} className="bg-white/10 p-4 rounded-lg border border-white/20 mb-3">
                        <h3 className="text-xl font-semibold">{blog.title}</h3>
                        <p className="text-sm opacity-70">{blog.content.slice(0, 100)}...</p>
                        <button onClick={() => onEdit(blog._id)} className="text-yellow-300 hover:underline text-sm mt-2">Edit</button>
                    </div>
                )) : <p>No published blogs.</p>}
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3">Drafts</h2>
                {draftBlogs.length ? draftBlogs.map((blog, i) => (
                    <div key={i} className="bg-white/10 p-4 rounded-lg border border-white/20 mb-3">
                        <h3 className="text-xl font-semibold">{blog.title}</h3>
                        <p className="text-sm opacity-70">{blog.content.slice(0, 100)}...</p>
                        <button onClick={() => onEdit(blog._id)} className="text-yellow-300 hover:underline text-sm mt-2">Edit</button>
                    </div>
                )) : <p>No drafts saved.</p>}
            </div>
        </div>
    );
};

export default BlogList;
