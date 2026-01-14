import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import './ChangePassword.css';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // TODO: Add API call to change password
    // For now, just show success popup
    setShowSuccess(true);
  };

  return (
    <div className="change-password-container">
      {/* Heading outside the form box */}
      <div className="forgot-heading">
        <h2 className="forgot-header">Change Your Password</h2>
        <p className="forgot-sub">
          Please enter your new password, make sure the password is correct before confirming.
        </p>
      </div>

      <div className="login-form-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">New Password</label>
          <div className="password-wrapper">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your new password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-wrapper">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showConfirmPassword}
            >
              {/* eye / eye-off SVGs */}
              {showConfirmPassword ? (
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

          <div className="forgot-actions">
            <button type="submit" className="submit-login-btn">Confirm</button>

            <div className="remember-row" aria-hidden="false">
              <p className="remember-text">Remember your password? <Link to="/login" className="login-link">Back to Login</Link></p>
            </div>
          </div>
        </form>
      </div>

      {/* Success confirmation modal */}
      {showSuccess && (
        <div className="cp-confirm-overlay" role="dialog" aria-modal="true">
          <div className="cp-confirm-box">
            <h3 className="cp-confirm-heading">Password Reseted</h3>

            <div className="cp-confirm-icon" aria-hidden="true">
              {/* Hexagon with checkmark */}
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path
                  d="M60 10L100 35V85L60 110L20 85V35L60 10Z"
                  fill="rgba(221, 170, 251, 0.15)"
                  stroke="rgba(221, 170, 251, 0.3)"
                  strokeWidth="2"
                />
                <path
                  d="M40 60L52 72L80 44"
                  stroke="#ddaafb"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="cp-confirm-text">Your password has been successfully changed, please log in again.</p>

            <div className="cp-confirm-actions">
              <Link to="/login" className="submit-change-password-btn cp-confirm-home">Back to Login</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
