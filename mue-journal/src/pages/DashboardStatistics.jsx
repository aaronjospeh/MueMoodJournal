import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import Footer from '../components/Footer.jsx';
import './UserDashboard.css';
import './DashboardStatistics.css';

const DashboardStatistics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('John Doe');
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="dashboard-page">
      <div className="bg-circles-container" aria-hidden="true">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>

      <DashboardHeader onMenuToggle={toggleSidebar} userName={userName} />
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      <main className="dashboard-content">
        <section className="stats-page">
          <div className="content-wrapper">
            <h2 className="section-title">Statistic</h2>
            <div className="stats-panel">
              <div className="stats-panel-header">
                <div className="toggle-group">
                  <button className="toggle-btn active">Weekly</button>
                  <button className="toggle-btn">Monthly</button>
                </div>
              </div>
              <div className="stats-chart-placeholder">
                <p>Chart preview area</p>
              </div>
              <div className="stats-panel-footer">
                <a className="quick-link" href="/startjournaling">Journal</a>
                <a className="quick-link" href="/dashboard/quotes">Quotes</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default DashboardStatistics;
