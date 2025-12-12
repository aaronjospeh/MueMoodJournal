import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHeader.css';
import mueLogo from '../assets/mue.svg';

const DashboardHeader = ({ onMenuToggle, userName = 'John Doe' }) => {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header-left">
        <button className="hamburger-btn" onClick={onMenuToggle} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <Link to="/" className="dashboard-logo">
          <img src={mueLogo} alt="Mue logo" className="logo-icon" />
          <span className="logo-name">Mue</span>
        </Link>
      </div>

      <div className="dashboard-header-right">
        <div className="user-profile">
          <button className="user-icon-btn" aria-label="User profile">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="3" fill="currentColor"/>
              <path d="M6.5 18.5c1-2 3-3.5 5.5-3.5s4.5 1.5 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
