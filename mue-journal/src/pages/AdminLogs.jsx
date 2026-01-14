import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import './AdminLogs.css';

const AdminLogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample log data
  const logs = [
    {
      id: 1,
      emoji: '😊',
      emotion: 'Happy',
      journalReport: 'Today I wake up at 7am and I...',
      birthdate: '15 January 2000',
      gender: 'Female',
      quotesSaved: '"You are allowed to be both...'
    },
    {
      id: 2,
      emoji: '😌',
      emotion: 'Calm',
      journalReport: 'Yesterday I already prepared...',
      birthdate: '08 November 2001',
      gender: 'Male',
      quotesSaved: '"Life is a journey where eve...'
    },
    {
      id: 3,
      emoji: '😊',
      emotion: 'Happy',
      journalReport: 'I have a friend named Bertha...',
      birthdate: '11 April 2003',
      gender: 'Male',
      quotesSaved: '"Today is a good day, tomor...'
    },
    {
      id: 4,
      emoji: '😢',
      emotion: 'Sad',
      journalReport: 'My exam result has come out...',
      birthdate: '27 December 2002',
      gender: 'Female',
      quotesSaved: '"A scar is not the end, it\'s a...'
    },
    {
      id: 5,
      emoji: '😢',
      emotion: 'Sad',
      journalReport: 'Today me and my family sup...',
      birthdate: '01 March 1999',
      gender: 'Male',
      quotesSaved: '"It\'s okay to be not okay for...'
    },
    {
      id: 6,
      emoji: '😑',
      emotion: 'Bored',
      journalReport: 'School was like always, teach...',
      birthdate: '30 July 1991',
      gender: 'Female',
      quotesSaved: '"We could always find hap...'
    },
    {
      id: 7,
      emoji: '😠',
      emotion: 'Mad',
      journalReport: 'I hate the way people look at...',
      birthdate: '03 September 2004',
      gender: 'Female',
      quotesSaved: '"Patience is a key, overload...'
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="admin-logs-page">
      <AdminSidebar />
      
      <div className="admin-main-content">
        {/* Background Bubbles */}
        <div className="admin-bg-circles" aria-hidden="true">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>

        {/* Header */}
        <header className="admin-header">
          <h1 className="admin-page-title">Input Logs</h1>
          <div className="admin-header-right">
            <span className="admin-header-name">Admin Baik Hati</span>
            <div className="admin-header-avatar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" fill="currentColor"/>
                <path d="M6.5 18.5c1-2 3-3.5 5.5-3.5s4.5 1.5 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="admin-content">
          <div className="logs-list-header">
            <h2 className="logs-list-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Input List
            </h2>
          </div>

          <div className="logs-list-section">
            <div className="section-actions">
                <div className="search-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search log.." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <button className="emoji-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                  Emojis
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                <button className="print-btn" onClick={handlePrint} title="Print logs">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  Print
                </button>

                <button className="camera-btn" onClick={() => window.location.reload()} title="Refresh data">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </button>
              </div>

            <div className="logs-table-container">
              <table className="logs-table">
                <thead>
                  <tr>
                    <th>Emojis</th>
                    <th>Journal Report</th>
                    <th>Birthdate</th>
                    <th>Gender</th>
                    <th>Quotes Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log) => (
                    <tr key={log.id}>
                      <td>
                        <div className="emoji-cell">
                          <span className="emoji-icon">{log.emoji}</span>
                          <span className={`emotion-label emotion-${log.emotion.toLowerCase()}`}>
                            {log.emotion}
                          </span>
                        </div>
                      </td>
                      <td className="journal-text">{log.journalReport}</td>
                      <td>{log.birthdate}</td>
                      <td>{log.gender}</td>
                      <td className="quote-text">{log.quotesSaved}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button className="page-btn" onClick={() => setCurrentPage(1)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="11 17 6 12 11 7"></polyline>
                  <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
              </button>
              <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className={`page-btn ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>1</button>
              <button className={`page-btn ${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>2</button>
              <button className={`page-btn ${currentPage === 3 ? 'active' : ''}`} onClick={() => setCurrentPage(3)}>3</button>
              <button className="page-btn" onClick={() => setCurrentPage(currentPage + 1)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <button className="page-btn" onClick={() => setCurrentPage(3)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLogs;
