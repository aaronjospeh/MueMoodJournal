// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './components/LoginPage.jsx';
import Header from './components/Header.jsx'; // <-- Import Header here
import './index.css';

// The Root component where routing is defined
const RouterRoot = () => {
  return (
    <BrowserRouter>
        {/* The top-level application container that defines the background and global layout */}
        <div className="landing-page"> 

            {/* Background Circles - Fixed and outside the routes */}
            <div className="bg-circles-container">
              {/* insert bubbles here */}
                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
                <div className="bubble bubble-3"></div>
                <div className="bubble bubble-4"></div>
                <div className="bubble bubble-5"></div>
            </div>

            {/* Header - FIXED and visible on ALL pages */}
            <Header /> 

            {/* Main content area where pages are swapped */}
            <Routes>
                {/* The Route element renders App.jsx for the home route */}
                <Route path="/" element={<App />} />
                
                {/* The Route element renders LoginPage.jsx for the login route */}
                <Route path="/login" element={<LoginPage />} /> 
            </Routes>
        </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterRoot />
    </React.StrictMode>,
);