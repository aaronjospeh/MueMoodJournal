import React, { useRef } from 'react';
import './PopularQuotesSection.css';

const PopularQuotesSection = () => {
  const quotes = [
    {
      text: "Journaling is writing therapy. It is the most cost-effective therapy available.",
      author: "Kathleen Adams"
    },
    {
      text: "Writing is the painting of the voice.",
      author: "Voltaire"
    },
    {
      text: "Your emotions make you human. Even the unpleasant ones have a purpose.",
      author: "Sabaa Tahir"
    },
    {
      text: "The mind is everything. What you think, you become.",
      author: "Buddha"
    },
    {
      text: "In journaling, there are no rules. There is no 'right' way to do it.",
      author: "Natalie Goldberg"
    },
    {
      text: "Knowing yourself is the beginning of all wisdom.",
      author: "Aristotle"
    }
  ];

  const railRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const handlePointerDown = (e) => {
    const rail = railRef.current;
    if (!rail) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollStartRef.current = rail.scrollLeft;
    rail.style.cursor = 'grabbing';
    rail.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const rail = railRef.current;
    if (!rail) return;

    const delta = e.clientX - startXRef.current;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    let nextScroll = scrollStartRef.current - delta;
    if (nextScroll < 0) nextScroll = 0;
    if (nextScroll > maxScroll) nextScroll = maxScroll;

    rail.scrollLeft = nextScroll;
    e.preventDefault();
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    const rail = railRef.current;
    isDraggingRef.current = false;
    if (rail) {
      rail.style.cursor = 'grab';
      rail.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="quotes-section">
      <div className="content-wrapper">
        <h2 className="section-title">Popular Quotes</h2>
        <p className="section-subtitle">Sometimes, a few words can calm an entire storm within. Find your peace in these little reminders - curated for you and your mood.</p>

        <div
          className="quotes-rail"
          ref={railRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          aria-label="Popular quotes carousel"
        >
          <div className="quotes-track">
            {quotes.map((quote, idx) => (
              <div key={idx} className="quote-card">
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularQuotesSection;
