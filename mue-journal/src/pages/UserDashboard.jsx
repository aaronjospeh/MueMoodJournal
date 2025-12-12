import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader.jsx';
import MoodEmotionSection from '../components/MoodEmotionSection.jsx';
import PopularQuotesSection from '../components/PopularQuotesSection.jsx';
import ImportanceOfJournalingSection from "../components/ImportanceOfJournalingSection.jsx";
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import Footer from '../components/Footer.jsx';
import './UserDashboard.css';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('John Doe'); // TODO: Replace with actual user data from context/auth

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="dashboard-page">
      {/* Background Bubbles - similar to landing page */}
      <div className="bg-circles-container" aria-hidden="true">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>

      {/* Dashboard Header - pass userName prop */}
      <DashboardHeader onMenuToggle={toggleSidebar} userName={userName} />

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
        <ImportanceOfJournalingSection />

        {/* Footer - only on dashboard */}
        <Footer />
      </main>
    </div>
  );
};

export default UserDashboard;
