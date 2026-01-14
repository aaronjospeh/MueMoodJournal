import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation - ensure fields are filled
    if (username.trim() && password.trim()) {
      // TODO: Add actual admin authentication logic here
      // For now, simply redirect to admin dashboard
      navigate('/admin/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-box">
        <h2>Welcome to Mue</h2>
        <p>Please enter your admin username and password</p>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            type="email" 
            placeholder="Enter your Admin Username or Email" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />

          <label htmlFor="password">Password</label>

          {/* password wrapper with toggle */}
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={toggleShowPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
            >
              {/* eye / eye-off SVGs */}
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5.05 0-9.3-3.11-11-7.5a11.03 11.03 0 0 1 4.36-5.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1l22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>

          <div className="form-links">
            <Link to="/login" className="signup-link">Back to User Login</Link>
          </div>

          <button type="submit" className="submit-login-btn">Admin Log In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
