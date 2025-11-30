import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally: perform API call here to send reset link
    setShowConfirmation(true);
  };

  return (
    <div className="forgot-page-container">
      {/* bubble background (optional, reuse bubble-bg pattern) */}
      <div className="bubble-bg" aria-hidden="true">
        <div className="bubble" style={{ '--size': '220px', '--x': '6%', '--y': '8%', '--duration': '18s', '--scale': '1.05' }} />
        <div className="bubble" style={{ '--size': '160px', '--x': '76%', '--y': '12%', '--duration': '22s', '--scale': '1' }} />
      </div>

      {/* moved heading outside the form box so it sits on top */}
      <div className="forgot-heading">
        <h2 className="forgot-header">Forgot Your Password?</h2>
        <p className="forgot-sub">Enter your registered email address below, and we'll send you a link to reset your password.</p>
      </div>

      <div className="login-form-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fp-email">Email Address</label>
          <input id="fp-email" name="email" type="email" placeholder="Enter your email, Ex: text@gmail.com" required />

          <div className="forgot-actions">
            <button type="submit" className="submit-login-btn">Send reset link</button>

            {/* inline remember + link row centered */}
            <div className="remember-row" aria-hidden="false">
              <p className="remember-text">Remember your password? <Link to="/login" className="login-link">Back to login</Link> </p>
              
            </div>
          </div>
        </form>
      </div>

      {/* Confirmation modal overlay */}
      {showConfirmation && (
        <div className="fp-confirm-overlay" role="dialog" aria-modal="true">
          <div className="fp-confirm-box">
            <h3 className="fp-confirm-heading">Forgot Password</h3>

            <div className="fp-confirm-icon" aria-hidden="true">
              {/* simple check icon */}
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="#ddaafb" opacity="0.15"/>
                <path d="M7 13l3 3 7-7" stroke="#ddaafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <p className="fp-confirm-text">Check your email! We have sent a password reset link to your email address.</p>

            <div className="fp-confirm-actions">
              <Link to="/login" className="submit-login-btn fp-confirm-home">Back to Login</Link>
              {/* <button className="fp-confirm-close" onClick={() => setShowConfirmation(false)}>Close</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
