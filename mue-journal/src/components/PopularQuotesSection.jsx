import React from 'react';
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

  return (
    <section className="quotes-section">
      <div className="content-wrapper">
        <h2 className="section-title">Popular Quotes</h2>
        <p className="section-subtitle">Inspiration for your journaling journey</p>

        <div className="quotes-grid">
          {quotes.map((quote, idx) => (
            <div key={idx} className="quote-card">
              <p className="quote-text">"{quote.text}"</p>
              <p className="quote-author">— {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularQuotesSection;
