import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import Footer from '../components/Footer.jsx';
import './UserDashboard.css';
import './DashboardReport.css';

const DashboardReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('Agatha Valerie');
  const [activeFilter, setActiveFilter] = useState('weekly');
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setFilterOpen(false);
  };

  const reports = [
    {
      title: 'Achieving First Honor Award – A Proud Moment',
      date: '10 January 2024',
      moods: 'Happy, Thankful, Energetic',
      quoteType: 'happy'
    },
    {
      title: 'Starting A New Habit – Consistency Wins',
      date: '05 November 2023',
      moods: 'Motivated, Focused, Hopeful',
      quoteType: 'motivation'
    },
    {
      title: 'My First Big Talk in Front of Hundreds – Breaking Fear',
      date: '02 September 2023',
      moods: 'Nervous, Excited, Proud',
      quoteType: 'popular'
    },
    {
      title: 'First Day of Department Orientation - Telkom University',
      date: '14 November 2023',
      moods: 'Happy, Exhausted, Bored',
      quoteType: 'motivation'
    },
    {
      title: 'First Time Celebrating New Year\'s Alone - Away From Home',
      date: '31 December 2023',
      moods: 'Sad, Unusual, Lonely',
      quoteType: 'sad'
    },
    {
      title: 'Quiet Evening Reflection – Learning to Slow Down',
      date: '02 February 2024',
      moods: 'Calm, Blessed, Grateful',
      quoteType: 'calm'
    }
  ];

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
        <section className="report-page">
          <div className="content-wrapper">
            <h2 className="section-title">Journal Report</h2>
            <div className="report-toolbar">
              <div className="search-wrapper">
                <input className="search-input" placeholder="Search..." aria-label="Search reports" />
                <button className="search-btn" aria-label="Search">🔍</button>
              </div>
              <div className="filter-wrapper">
                <button 
                  className="filter-toggle-btn" 
                  onClick={() => setFilterOpen(!filterOpen)}
                  aria-label="Filter"
                >
                  🔽
                </button>
                {filterOpen && (
                  <div className="filter-dropdown">
                    <button 
                      className={`filter-option ${activeFilter === 'weekly' ? 'active' : ''}`}
                      onClick={() => handleFilterSelect('weekly')}
                    >
                      Weekly
                    </button>
                    <button 
                      className={`filter-option ${activeFilter === 'monthly' ? 'active' : ''}`}
                      onClick={() => handleFilterSelect('monthly')}
                    >
                      Monthly
                    </button>
                    <button 
                      className={`filter-option ${activeFilter === 'yearly' ? 'active' : ''}`}
                      onClick={() => handleFilterSelect('yearly')}
                    >
                      Yearly
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="report-list">
              {reports.map((report, idx) => (
                <div key={idx} className="report-item">
                  <div className="report-item-left">
                    <div className="report-title">{report.title}</div>
                    <div className="report-meta">Created On: {report.date}</div>
                    <div className="report-meta">Mood For Journal: {report.moods}</div>
                  </div>
                  <div className="report-item-right">
                    <div className={`quote-tag quote-${report.quoteType}`}>Quote:<br/>{report.quoteType.charAt(0).toUpperCase() + report.quoteType.slice(1)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default DashboardReport;
