import React from 'react';
import { Link } from 'react-router-dom';
import './ImportanceOfJournalingSection.css';

const ImportanceOfJournalingSection = () => {
  return (
    <section className="importance-section">
      <div className="content-wrapper">
        <h2 className="importance-title">The Importance of Journaling</h2>
        <p className="importance-text">
          Journaling isn't just about recording your day — it's about getting to know yourself through every emotion,
          thought, and event you experience. Journaling helps you understand your emotional patterns, identify your
          mood triggers, and calm a busy mind. In a fast-paced world, writing provides a quiet space to pause, reflect,
          and make peace with yourself. Mue is here to make that process simple yet meaningful — a digital
          companion that accompanies your every feeling, without judgment, just listening.
        </p>
        
        <div className="importance-footer">
          <p className="importance-text">
            Start writing today, and let every word bring you closer to yourself.
          </p>
          <Link to="/startjournaling" className="importance-btn">Start Journaling</Link>
        </div>
      </div>
    </section>
  );
};

export default ImportanceOfJournalingSection;
