import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import Footer from '../components/Footer.jsx';
import './UserDashboard.css';
import './DashboardQuotes.css';

const DashboardQuotes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('Agatha Valerie');
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const quotes = [
    {
      text: "You don't have to be okay all the time. Just be honest with what you feel.",
      mood: 'popular'
    },
    {
      text: 'You are allowed to be both a masterpiece and a work in progress.',
      mood: 'happy'
    },
    {
      text: 'Peace does not mean an absence of conflicts; differences will always be there.',
      mood: 'sad'
    },
    {
      text: 'Your emotions make you human. Even the unpleasant ones have a purpose.',
      mood: 'motivation'
    },
    // NEW CALM QUOTES
    {
      text: 'Breath is the anchor of the mind.',
      mood: 'calm'
    },
    {
      text: 'Quiet the mind, and the soul will speak.',
      mood: 'calm'
    },
    {
      text: "You don't have to be okay all the time. Just be honest with what you feel.",
      mood: 'popular'
    },
    {
      text: 'You are allowed to be both a masterpiece and a work in progress.',
      mood: 'happy'
    },
    {
      text: 'Peace does not mean an absence of conflicts; differences will always be there.',
      mood: 'sad'
    },
    {
      text: 'Your emotions make you human. Even the unpleasant ones have a purpose.',
      mood: 'motivation'
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
        <section className="quotes-page">
          <div className="content-wrapper">
            <h2 className="section-title">Hall of Quotes</h2>
            <div className="quotes-toolbar">
              <div className="search-wrapper">
                <input className="search-input" placeholder="Search quotes..." aria-label="Search quotes" />
                <button className="search-btn" aria-label="Search">🔍</button>
              </div>
              <div className="filter-pills">
                <button className="pill pill-popular">Popular</button>
                <button className="pill pill-happy">Happy</button>
                <button className="pill pill-sad">Sad</button>
                <button className="pill pill-motivation">Motivation</button>
                {/* NEW CALM BUTTON */}
                <button className="pill pill-calm">Calm</button>
              </div>
            </div>
          </div>
          <div className="quotes-list">
            {quotes.map((quote, idx) => (
              <div key={idx} className={`quote-list-card mood-${quote.mood}`}>
                <p className="quote-list-text">“{quote.text}”</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default DashboardQuotes;