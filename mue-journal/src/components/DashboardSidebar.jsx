import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardSidebar.css';

const DashboardSidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Menu</h3>
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">📊</span>
          Dashboard
        </Link>
        <Link to="/dashboard/journal" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">📝</span>
          My Journal
        </Link>
        <Link to="/dashboard/moods" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">😊</span>
          Mood Tracker
        </Link>
        <Link to="/dashboard/settings" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">⚙️</span>
          Settings
        </Link>
        <Link to="/" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">🏠</span>
          Home
        </Link>
        <button className="sidebar-link logout-btn">
          <span className="sidebar-icon">🚪</span>
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
