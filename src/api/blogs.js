// src/api/blogs.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const saveDraft = (data) => API.post('/blogs/save-draft', data);
export const publishBlog = (data) => API.post('/blogs/publish', data);
export const getAllBlogs = () => API.get('/blogs');
export const getBlogById = (id) => API.get(`/blogs/${id}`);
