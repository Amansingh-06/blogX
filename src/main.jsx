// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // 👈 import
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* 👈 wrap App inside AuthProvider */}
      <Toaster position="top-center" />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
