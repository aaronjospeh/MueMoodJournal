import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardSidebar.css';

const DashboardSidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-title">
          <span className="sidebar-title-icon">◆</span>
          <span>Sidebar</span>
        </div>
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">🏠</span>
          Dashboard
        </Link>
        <Link to="/dashboard/statistics" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">📊</span>
          Statistics
        </Link>
        <Link to="/dashboard/report" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">📝</span>
          Report
        </Link>
        <Link to="/dashboard/quotes" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">💬</span>
          Quotes
        </Link>
        <Link to="/startjournaling" className="sidebar-link" onClick={onClose}>
          <span className="sidebar-icon">➕</span>
          Start Journaling
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
