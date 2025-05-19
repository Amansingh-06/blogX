import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to login page
      };


    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b border-white/20 fixed w-full ">
            <h1 className="text-3xl font-bold tracking-wider hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => navigate('/')}>
                BlogX
            </h1>
            {isAuthenticated ? (
                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            ) : (
                <button
                    onClick={() => navigate('/auth')}
                    className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
                >
                    Login
                </button>
            )}
        </header>
    );
};

export default Navbar;
