import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoodEmotionSection from '../components/MoodEmotionSection.jsx';
import PopularQuotesSection from '../components/PopularQuotesSection.jsx';
import Footer from '../components/Footer.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import './UserDashboard.css';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="dashboard-page">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <Link to="/" className="dashboard-logo">
            <span className="logo-emoji">🙂</span>
            <span className="logo-text">Mue</span>
          </Link>
        </div>

        <div className="dashboard-header-right">
          <button className="user-icon-btn" aria-label="User profile">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="10" r="3" fill="currentColor"/>
              <path d="M6.5 18.5c1-2 3-3.5 5.5-3.5s4.5 1.5 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        {/* Mood Chart Section */}
        <section className="mood-chart-section">
          <div className="content-wrapper">
            <h2 className="section-title">Your Mood This Week</h2>
            <div className="mood-chart-placeholder">
              {/* Placeholder for mood chart - replace with actual chart component */}
              <p className="chart-placeholder-text">📊 Mood chart visualization will go here</p>
            </div>
          </div>
        </section>

        {/* Reused Sections */}
        <MoodEmotionSection />
        <PopularQuotesSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default UserDashboard;
