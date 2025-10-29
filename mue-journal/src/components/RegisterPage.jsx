import React, { useState } from 'react';
import './LoginPage.css';
import './RegisterPage.css';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="register-page-container">
      {/* bubble background (reusable) */}
      <div className="bubble-bg" aria-hidden="true">
        <div className="bubble" style={{ '--size': '260px', '--x': '5%',  '--y': '6%',  '--duration': '18s', '--scale': '1.1' }} />
        <div className="bubble" style={{ '--size': '180px', '--x': '75%', '--y': '10%', '--duration': '22s', '--scale': '1' }} />
        <div className="bubble" style={{ '--size': '140px', '--x': '50%', '--y': '2%',  '--duration': '16s', '--scale': '1.05' }} />
      </div>

      <div className="login-form-box">
        <h2 className="register-header">Please register your account</h2>

        {/* Changed: two-column form grid */}
        <form>
          {/* two-column form grid — only input fields live here */}
          <div className="register-form-grid">
            <div className="col left">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" required />

              <label htmlFor="username-register">Username</label>
              <input id="username-register" name="username" type="text" placeholder="Enter your username" required />

              <label htmlFor="birthdate">Birthdate</label>
              <input id="birthdate" name="birthdate" type="date" required />
            </div>

            <div className="col right">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" required />

              <label htmlFor="password-register">Password</label>
              <div className="password-wrapper">
                <input
                  id="password-register"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(s => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                >
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

              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="password-wrapper">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirm(s => !s)}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  aria-pressed={showConfirm}
                >
                  {showConfirm ? (
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
            </div>
          </div>

          {/* actions below the grid, centered */}
          <div className="register-actions">
            <a href="/login" className="signup-link">Already have an account?</a>
            <button type="submit" className="submit-login-btn">Register</button>
          </div>
         </form>
      </div>
    </div>
  );
};

export default RegisterPage;
