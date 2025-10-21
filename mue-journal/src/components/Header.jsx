import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import mueLogo from '../assets/mue.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If we're already on the home page, just scroll to about
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If we're already on the home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate to home
      navigate('/');
    }
  };

  return (
    // We need a unique container for the header content to center it within the fixed header
    <header className="header">
      <div className="header-content-wrapper"> 
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={mueLogo} alt="Mue logo" className="logo-icon" />
            <span className="logo-name">Mue</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <button onClick={handleHomeClick} className="nav-item">Home</button> 
          <button onClick={handleAboutClick} className="nav-item">About Us</button> 
          <div className="nav-item language-dropdown">Language</div>
        </nav>

        {/* Login Button: Use the Link component for redirection */}
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;