// src/components/LoginPage.jsx

import React from 'react';
import './LoginPage.css'; // We'll create this CSS next

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-form-box">
        <h2>Welcome Back!</h2>
        <p>Log in to continue your journey with Mue.</p>
        
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-login-btn">Log In</button>
        </form>
        
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginPage;