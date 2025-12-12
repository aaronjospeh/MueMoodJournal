import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import mueLogo from '../assets/mue.svg';
import './Header.css';

const Header = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false);
      }
    };

    if (languageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageDropdownOpen]);

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
          <button onClick={handleHomeClick} className="nav-item">
            Home
          </button>
          <Link to="/about" className="nav-item">
            About Us
          </Link>

          {/* Language button with dropdown */}
          <div className="language-dropdown-wrapper" ref={dropdownRef}>
            <button
              className="nav-item language-btn"
              onClick={toggleLanguageDropdown}
              aria-expanded={languageDropdownOpen}
              aria-haspopup="true"
            >
              Language
            </button>

            {/* Dropdown menu */}
            {languageDropdownOpen && (
              <div className="language-dropdown-menu" role="menu">
                <button className="language-option" role="menuitem">
                  English
                </button>
                <button className="language-option" role="menuitem">
                  Indonesia
                </button>
              </div>
            )}
          </div>
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