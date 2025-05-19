// src/api/auth.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Register a new user
export const registerUser = (formData) => API.post('/auth/register', formData);

// Login a user
export const loginUser = (formData) => API.post('/auth/login', formData);
