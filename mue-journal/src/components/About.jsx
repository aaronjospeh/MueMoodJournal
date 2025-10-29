import React from 'react';
import './LoginPage.css';

const About = () => {
  return (
    <div className="about-page-container">
      {/* bubble background (reusable — copy to other pages/sections) */}
      <div className="bubble-bg" aria-hidden="true">
        <div className="bubble" style={{ '--size': '260px', '--x': '8%',  '--y': '6%',  '--duration': '20s', '--scale': '1.05' }} />
        <div className="bubble" style={{ '--size': '180px', '--x': '72%', '--y': '8%',  '--duration': '18s', '--scale': '1' }} />
        <div className="bubble" style={{ '--size': '140px', '--x': '50%', '--y': '20%', '--duration': '16s', '--scale': '1.02' }} />
        <div className="bubble" style={{ '--size': '120px', '--x': '85%', '--y': '68%', '--duration': '22s', '--scale': '0.95' }} />
        <div className="bubble" style={{ '--size': '200px', '--x': '12%', '--y': '74%', '--duration': '26s', '--scale': '1.1' }} />
      </div>

      <div className="about-content">
        <h1>About Mue</h1>
        <p>
          ...existing about copy...
        </p>
        {/* add more about-page content here; it will sit above the bubbles */}
      </div>
    </div>
  );
};

export default About;
