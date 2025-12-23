import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth.jsx';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const handleStartJournaling = () => {
    if (isAuth) {
      navigate('/startjournaling');
    } else {
      navigate('/login', { state: { from: '/startjournaling' } });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Circles Container */}
        <div className="hero-content">
          <h1>Mood Journaling</h1>
          <h1>For You and Your Mood</h1> {/* Two H1s for separate lines */}
        <p className="subtitle">
          Mue: Your cozy space to track moods, reflect feelings, and understand yourself
        </p>
        
        <button className="start-journaling-btn" onClick={handleStartJournaling}>
          Start Journaling
        </button>
      </div>
    </section>
  );
};

export default HeroSection;