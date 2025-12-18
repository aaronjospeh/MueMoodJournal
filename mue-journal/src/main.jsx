// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './components/LoginPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import RegisterPage from './components/RegisterPage.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import AboutPage from './components/AboutPage.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import DashboardStatistics from './pages/DashboardStatistics.jsx';
import DashboardReport from './pages/DashboardReport.jsx';
import DashboardQuotes from './pages/DashboardQuotes.jsx';
import StartJournaling from './pages/StartJournaling.jsx';

// Layout wrapper to conditionally show Header and Footer
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname === '/startjournaling';

  return (
    <div className="landing-page">
      {/* Background Circles - only on non-dashboard pages */}
      {!isDashboard && (
        <div className="bg-circles-container">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>
      )}

      {/* Header - only on non-dashboard pages */}
      {!isDashboard && <Header />}

      {/* Main Routes */}
      {children}

      {/* Footer - only on non-dashboard pages */}
      {!isDashboard && <Footer />}
    </div>
  );
};

// The Root component where routing is defined
const RouterRoot = () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          {/* The Route element renders App.jsx for the home route */}
          <Route path="/" element={<App />} />
          
          {/* The Route element renders LoginPage.jsx for the login route */}
          <Route path="/login" element={<LoginPage />} /> 
          
          {/* The Route element renders RegisterPage.jsx for the register route */}
          <Route path="/register" element={<RegisterPage />} /> 

          {/* The Route element renders ForgotPassword.jsx for the forgot-password route */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* The Route element renders AboutPage.jsx for the about route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Dashboard routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/statistics" element={<DashboardStatistics />} />
          <Route path="/dashboard/report" element={<DashboardReport />} />
          <Route path="/dashboard/quotes" element={<DashboardQuotes />} />

          {/* Start Journaling route */}
          <Route path="/startjournaling" element={<StartJournaling />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterRoot />
    </React.StrictMode>,
);