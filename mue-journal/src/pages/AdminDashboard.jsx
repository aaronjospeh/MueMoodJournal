import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample user data
  const users = [
    {
      id: 1,
      name: 'Bernard Bornwitt',
      email: 'bbornwitt@gmail.com',
      birthdate: '15 January 2000',
      gender: 'Male',
      joinDate: '12 March 2023',
      lastOnline: '1 minute ago',
      avatar: 'BB'
    },
    {
      id: 2,
      name: 'Olivia Bennet',
      email: 'oliviab@gmail.com',
      birthdate: '13 August 2003',
      gender: 'Female',
      joinDate: '27 June 2022',
      lastOnline: '5 minutes ago',
      avatar: 'OB'
    },
    {
      id: 3,
      name: 'Daniel Warren',
      email: 'danwarren@gmail.com',
      birthdate: '08 March 2001',
      gender: 'Male',
      joinDate: '05 October 2021',
      lastOnline: '1 month ago',
      avatar: 'DW'
    },
    {
      id: 4,
      name: 'Chloe Hayes',
      email: 'chloehayes@gmail.com',
      birthdate: '25 November 1991',
      gender: 'Female',
      joinDate: '16 May 2022',
      lastOnline: '4 days ago',
      avatar: 'CH'
    },
    {
      id: 5,
      name: 'Marcus Reed',
      email: 'mreed@gmail.com',
      birthdate: '17 February 2000',
      gender: 'Male',
      joinDate: '09 February 2019',
      lastOnline: '7 hours ago',
      avatar: 'MR'
    },
    {
      id: 6,
      name: 'Isabelle Clark',
      email: 'iclark@gmail.com',
      birthdate: '21 July 2002',
      gender: 'Female',
      joinDate: '18 September 2020',
      lastOnline: '3 weeks ago',
      avatar: 'IC'
    },
    {
      id: 7,
      name: 'Mark Wilburg',
      email: 'marklog@gmail.com',
      birthdate: '07 April 2000',
      gender: 'Male',
      joinDate: '24 December 2024',
      lastOnline: 'yesterday',
      avatar: 'MW'
    }
  ];

  return (
    <div className="admin-dashboard-page">
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
          <h1 className="admin-page-title">Dashboard</h1>
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
          <div className="user-list-header">
            <h2 className="user-list-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              User List
            </h2>
          </div>

          <div className="user-list-section">
            <div className="section-actions">
                <div className="search-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search user.." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <button className="period-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Periods
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                <button className="refresh-btn" onClick={() => window.location.reload()} title="Refresh data">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </button>
              </div>

            <div className="user-table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Birthdate</th>
                    <th>Gender</th>
                    <th>Join Date</th>
                    <th>Last Online</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="user-cell">
                          <div className="user-avatar-table">{user.avatar}</div>
                          <div className="user-details">
                            <div className="user-name-table">{user.name}</div>
                            <div className="user-email-table">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>{user.birthdate}</td>
                      <td>{user.gender}</td>
                      <td>{user.joinDate}</td>
                      <td>{user.lastOnline}</td>
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

export default AdminDashboard;
