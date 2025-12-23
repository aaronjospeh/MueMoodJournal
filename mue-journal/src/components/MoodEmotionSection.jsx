import React, { useRef } from 'react';
import './MoodEmotionSection.css';

const MoodEmotionSection = () => {
  const emotions = [
    {
      title: 'Happy',
      description: 'when there are small things that make the heart light.',
      icon: '😊',
      tone: 'happy'
    },
    {
      title: 'Sad',
      description: 'when you need time to be quiet and calm down.',
      icon: '😔',
      tone: 'sad'
    },
    {
      title: 'Mad',
      description: 'when you want to release stress without hurting anyone.',
      icon: '😠',
      tone: 'mad'
    },
    {
      title: 'Calm',
      description: 'a rare, but always meaningful moment of peace.',
      icon: '🙂',
      tone: 'calm'
    },
    {
      title: 'Bored',
      description: 'when the world feels flat and time passes slowly',
      icon: '😒',
      tone: 'bored'
    }
  ];

  const marqueeRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const handlePointerDown = (e) => {
    const container = marqueeRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollStartRef.current = container.scrollLeft;
    container.style.cursor = 'grabbing';
    container.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const container = marqueeRef.current;
    if (!container) return;

    const delta = e.clientX - startXRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let nextScroll = scrollStartRef.current - delta;
    if (nextScroll < 0) nextScroll = 0;
    if (nextScroll > maxScroll) nextScroll = maxScroll;

    container.scrollLeft = nextScroll;
    e.preventDefault();
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    const container = marqueeRef.current;
    isDraggingRef.current = false;
    if (container) {
      container.style.cursor = 'grab';
      container.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="mood-emotion-section">
      <div className="content-wrapper">
        <h2 className="section-title">Moods & Emotions</h2>
        <p className="section-subtitle">Mood is a reflection of the emotions we feel at any given moment, and recognizing them helps us understand ourselves more deeply.</p>

        <div
          className="emotion-marquee"
          aria-label="Mood cards carousel"
          ref={marqueeRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div className="marquee-track">
            {emotions.map((emotion) => (
              <div key={emotion.title} className={`emotion-pill tone-${emotion.tone}`}>
                <span className="emotion-pill-icon" aria-hidden="true">{emotion.icon}</span>
                <div className="emotion-pill-text">
                  <div className="emotion-pill-title">{emotion.title}</div>
                  <div className="emotion-pill-desc">{emotion.description}</div>
                </div>
              </div>
            ))}
            <button type="button" className="emotion-pill more-pill">
              <span className="emotion-pill-icon" aria-hidden="true">➜</span>
              <div className="emotion-pill-text">
                <div className="emotion-pill-title">More</div>
                <div className="emotion-pill-desc">Explore more moods</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodEmotionSection;
