import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth.jsx';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import Footer from '../components/Footer.jsx';
import './UserDashboard.css';
import './StartJournaling.css';

const StartJournaling = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('Agatha Valerie');
  const [entry, setEntry] = useState('');
  const [quotes, setQuotes] = useState('');
  const navigate = useNavigate();
  const { isAuth, isChecking } = useAuth();
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const handleSave = () => {
    // Placeholder for save action
    alert('Your journal entry is saved (placeholder).');
    setEntry('');
    setQuotes('');
  };

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isChecking && !isAuth) {
      navigate('/login', { replace: true, state: { from: '/startjournaling' } });
    }
  }, [isAuth, isChecking, navigate]);

  // Optionally render nothing while checking auth to avoid flicker
  if (isChecking) return null;

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
        <section>
          <div className="content-wrapper">
            <h2 className="section-title">How's your day?</h2>
            <div className="journal-box">
              <input className="journal-title" placeholder="Title of your journal.." />
              <textarea
                className="journal-textarea"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                rows={10}
                placeholder="Spill what you feel today.."
              />
              <textarea
                className="journal-quotes"
                value={quotes}
                onChange={(e) => setQuotes(e.target.value)}
                rows={3}
                placeholder="Quotes you wanna share.."
              />
              <div className="journal-actions">
                <button className="save-btn" onClick={handleSave}>Save Entry</button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default StartJournaling;
