import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Circles Container */}
        <div className="hero-content">
          <h1>Mood Journaling</h1>
          <h1>For You and Your Mood</h1> {/* Two H1s for separate lines */}
        <p className="subtitle">
          Your cozy space to track moods, reflect feelings, and understand yourself
        </p>
        
        <button className="start-journaling-btn">
          Start Journaling
        </button>
      </div>
    </section>
  );
};

export default HeroSection;