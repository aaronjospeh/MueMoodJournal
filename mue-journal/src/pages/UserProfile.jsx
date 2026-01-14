import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgBubbles from '../components/BgBubbles.jsx';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Agatha',
    lastName: 'Penelope Valerie Grand',
    username: 'Agatha Valerie',
    email: 'AgathaVal@gmail.com',
    gender: 'Male',
    birthdate: '2000-03-15',
    password: '••••••••••••••••',
    lastLogin: 'Friday, 14 Nov 2025, 12:00PM',
    profileImage: null
  });

  const [editData, setEditData] = useState(profileData);
  const primaryLastName = profileData.lastName ? profileData.lastName.split(' ')[0] : '';
  const userName = `${profileData.firstName} ${primaryLastName}`.trim();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    setProfileData(editData);
    setIsEditing(false);
    // TODO: Add API call to save profile changes
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="user-profile-page">
      <BgBubbles />

      <DashboardHeader onMenuToggle={toggleSidebar} userName={userName || 'Your Profile'} />
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      <main className="user-profile-container">
        <div className="profile-content">
          {/* User Info Card */}
          <h1>Your Profile</h1>
          <div className="profile-card user-info-card">
            <div className="user-avatar">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="rgba(221, 170, 251, 0.2)" />
                <circle cx="40" cy="28" r="14" fill="rgba(221, 170, 251, 0.4)" />
                <path d="M56 60c0-8.84-7.16-16-16-16s-16 7.16-16 16" fill="rgba(221, 170, 251, 0.4)" />
              </svg>
            </div>
            <div className="user-info-text">
              <h2>{profileData.firstName} {profileData.lastName.split(' ')[0]}</h2>
              <p className="last-login">Last Login {profileData.lastLogin}</p>
            </div>
          </div>

          {/* Profile Details Card */}
          <div className="profile-card profile-details-card">
          {isEditing ? (
            <div className="edit-mode">
              <div className="edit-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={editData.firstName}
                  onChange={handleEditChange}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={editData.lastName}
                  onChange={handleEditChange}
                  placeholder="Last Name"
                />
              </div>

              <div className="edit-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={editData.username}
                  onChange={handleEditChange}
                  placeholder="Username"
                />
              </div>

              <div className="edit-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleEditChange}
                  placeholder="Email"
                />
              </div>

              <div className="edit-group">
                <label>Gender</label>
                <select name="gender" value={editData.gender} onChange={handleEditChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="edit-group">
                <label>Birthdate</label>
                <input
                  type="date"
                  name="birthdate"
                  value={editData.birthdate}
                  onChange={handleEditChange}
                />
              </div>

              <div className="edit-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={editData.password}
                  onChange={handleEditChange}
                  placeholder="Enter password"
                />
              </div>

              <div className="edit-actions">
                <button className="btn-save" onClick={handleSaveChanges}>Save Changes</button>
                <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className="view-mode">
              <div className="profile-field">
                <span className="field-label">Full Name</span>
                <span className="field-value">{profileData.firstName} {profileData.lastName}</span>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                  aria-label="Edit full name"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </button>
              </div>

              <div className="profile-field">
                <span className="field-label">Username</span>
                <span className="field-value">{profileData.username}</span>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                  aria-label="Edit username"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </button>
              </div>

              <div className="profile-field">
                <span className="field-label">Email</span>
                <span className="field-value">{profileData.email}</span>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                  aria-label="Edit email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </button>
              </div>

              <div className="profile-field gender-field">
                <span className="field-label">Gender :</span>
                <div className="gender-dropdown-wrapper">
                  {profileData.gender === 'Female' && (
                    <svg className="gender-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="7"/>
                      <line x1="12" y1="15" x2="12" y2="21"/>
                      <line x1="9" y1="18" x2="15" y2="18"/>
                    </svg>
                  )}
                  {profileData.gender === 'Male' && (
                    <svg className="gender-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="10" cy="14" r="7"/>
                      <line x1="15" y1="9" x2="21" y2="3"/>
                      <line x1="18" y1="3" x2="21" y2="3"/>
                      <line x1="21" y1="3" x2="21" y2="6"/>
                    </svg>
                  )}
                  <select 
                    className={`gender-dropdown ${profileData.gender.toLowerCase()}`}
                    value={profileData.gender}
                    onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div className="profile-field">
                <span className="field-label">Birthdate</span>
                <span className="field-value">{new Date(profileData.birthdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                  aria-label="Edit birthdate"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </button>
              </div>

              <div className="profile-field">
                <span className="field-label">Password</span>
                <span className="field-value">{profileData.password}</span>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                  aria-label="Edit password"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
