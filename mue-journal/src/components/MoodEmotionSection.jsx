import React from 'react';
import './MoodEmotionSection.css';

const MoodEmotionSection = () => {
  const emotions = [
    {
      title: 'Joy',
      description: 'A feeling of great pleasure and happiness. Joy uplifts your spirit and reminds you of the beautiful moments in life.',
      icon: '😊'
    },
    {
      title: 'Sadness',
      description: 'A natural emotion reflecting sorrow or disappointment. Acknowledging sadness helps you process and heal from difficult experiences.',
      icon: '😢'
    },
    {
      title: 'Anger',
      description: 'An intense feeling of displeasure or hostility. Understanding your anger helps you respond thoughtfully rather than react impulsively.',
      icon: '😠'
    },
    {
      title: 'Anxiety',
      description: 'A state of worry or nervousness about future events. Journaling about anxiety can help clarify your concerns and reduce stress.',
      icon: '😰'
    }
  ];

  return (
    <section className="mood-emotion-section">
      <div className="content-wrapper">
        <h2 className="section-title">Moods & Emotions</h2>
        <p className="section-subtitle">Understanding your emotional landscape</p>

        <div className="emotions-grid">
          {emotions.map((emotion, idx) => (
            <div key={idx} className="emotion-card">
              <div className="emotion-icon">{emotion.icon}</div>
              <h3 className="emotion-title">{emotion.title}</h3>
              <p className="emotion-description">{emotion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodEmotionSection;
