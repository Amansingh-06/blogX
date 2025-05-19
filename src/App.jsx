import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogEditorPage from './pages/BlogEditorPage';
import AllBlogsPage from './pages/AllBlogsPage';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/auth" element={<AuthPage/>}/>
        <Route
          path="/editor"
          element={<BlogEditorPage  />}
        />
        <Route
          path="/editor/:id"
          element={<BlogEditorPage />}
        />
        <Route
          path="/blogs"
          element={<AllBlogsPage  />}
        />
      </Routes>
    </Router>
  );
};

export default App;
