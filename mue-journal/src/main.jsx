import React, { useEffect } from 'react';
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
import AuthProvider from './context/Auth.jsx';

// 1. IMPORT REACT QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 2. CREATE THE CLIENT INSTANCE
const queryClient = new QueryClient();

// Layout wrapper to conditionally show Header and Footer
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname === '/startjournaling';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

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
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/statistics" element={<DashboardStatistics />} />
          <Route path="/dashboard/report" element={<DashboardReport />} />
          <Route path="/dashboard/quotes" element={<DashboardQuotes />} />
          <Route path="/startjournaling" element={<StartJournaling />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 3. WRAP EVERYTHING (INCLUDING AUTHPROVIDER) WITH QUERYCLIENTPROVIDER */}
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterRoot />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);