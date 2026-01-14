import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './AdminSidebar.css';
import mueLogo from '../assets/mue.svg';

const AdminSidebar = ({ adminName = 'Admin Baik Hati', adminEmail = 'adminbaikhati@gmail.com' }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Add logout logic
    navigate('/login');
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <div className="admin-logo">
          <img src={mueLogo} alt="Mue logo" className="admin-logo-icon" />
          <span className="admin-logo-text">Mue (Admin)</span>
        </div>
      </div>

      <nav className="admin-nav">
        <Link 
          to="/admin/dashboard" 
          className={`admin-nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Dashboard</span>
        </Link>

        <Link 
          to="/admin/logs" 
          className={`admin-nav-link ${location.pathname === '/admin/logs' ? 'active' : ''}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Input Logs</span>
        </Link>
      </nav>

      <div className="admin-profile-section">
        <div className="admin-profile">
          <div className="admin-avatar">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="3" fill="currentColor"/>
              <path d="M6.5 18.5c1-2 3-3.5 5.5-3.5s4.5 1.5 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="admin-info">
            <div className="admin-name">{adminName}</div>
            <div className="admin-email">{adminEmail}</div>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
