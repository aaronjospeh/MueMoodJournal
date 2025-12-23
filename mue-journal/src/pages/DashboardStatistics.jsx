import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import Footer from '../components/Footer.jsx';
import MoodChart from '../components/MoodChart.jsx';
import './UserDashboard.css';
import './DashboardStatistics.css';

const DashboardStatistics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('Agatha Valerie');
  const [activeFilter, setActiveFilter] = useState('yearly');
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setFilterOpen(false);
  };

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
                <div className="filter-wrapper-stats">
                  <button 
                    className="filter-toggle-btn-stats" 
                    onClick={() => setFilterOpen(!filterOpen)}
                    aria-label="Filter"
                  >
                    {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} ▼
                  </button>
                  {filterOpen && (
                    <div className="filter-dropdown-stats">
                      <button 
                        className={`filter-option-stats ${activeFilter === 'weekly' ? 'active' : ''}`}
                        onClick={() => handleFilterSelect('weekly')}
                      >
                        Weekly
                      </button>
                      <button 
                        className={`filter-option-stats ${activeFilter === 'monthly' ? 'active' : ''}`}
                        onClick={() => handleFilterSelect('monthly')}
                      >
                        Monthly
                      </button>
                      <button 
                        className={`filter-option-stats ${activeFilter === 'yearly' ? 'active' : ''}`}
                        onClick={() => handleFilterSelect('yearly')}
                      >
                        Yearly
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="stats-chart-placeholder">
                <MoodChart period={activeFilter} />
              </div>
            </div>
            <div className="stats-summary">
              <div className="summary-section">
                <h3 className="summary-title">Journal</h3>
                <div className="summary-card journal-card">
                  <div className="summary-value">88</div>
                  <p className="summary-text">This is the total number of your journal entries during the specified period.</p>
                </div>
              </div>
              <div className="summary-section">
                <h3 className="summary-title">Quotes</h3>
                <div className="summary-card quotes-card">
                  <div className="summary-value">95</div>
                  <p className="summary-text">This is the number of your quotes during the specified period.</p>
                </div>
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
