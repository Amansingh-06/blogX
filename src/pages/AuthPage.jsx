import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { registerUser, loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const toggleMode = () => setIsLogin((prev) => !prev);
    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const res = await loginUser(formData);
                console.log('Login Success:', res.data);
                localStorage.setItem('token', res.data.token); // Store JWT
                navigate('/blogs')
                // Redirect or notify user
            } else {
                const res = await registerUser(formData);
                console.log('Register Success:', res.data);
                localStorage.setItem('token', res.data.token);
                // Redirect or notify user
            }
        } catch (err) {
            console.error('Auth Error:', err.response?.data?.msg || err.message);
            alert(err.response?.data?.msg || 'Something went wrong');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
            <motion.div
                className="w-full max-w-md bg-white/10 backdrop-blur-xl text-white rounded-2xl p-8 shadow-2xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-6">
                    {isLogin ? 'Login to BlogX' : 'Create a BlogX Account'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-white/20 placeholder-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-white/20 placeholder-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-3 pr-12 bg-white/20 placeholder-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-3 text-white cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center mt-6 text-sm">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        className="text-yellow-300 hover:underline"
                        onClick={toggleMode}
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </motion.div>
        </div>
    );
};

export default AuthPage;
