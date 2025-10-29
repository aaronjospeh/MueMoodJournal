import React from 'react';
import '../index.css'; // ensure the global bubble styles are available

const BgBubbles = () => (
  <div className="bg-circles-container" aria-hidden="true">
    <div className="bubble bubble-1" style={{ top: '20%', left: '8%', width: '300px', height: '300px', animationDuration: '12s' }} />
    <div className="bubble bubble-2" style={{ top: '60%', right: '6%', width: '220px', height: '220px', animationDuration: '18s' }} />
    <div className="bubble bubble-3" style={{ top: '40%', left: '78%', width: '350px', height: '350px', animationDuration: '14s' }} />
    <div className="bubble bubble-4" style={{ top: '85%', left: '18%', width: '140px', height: '140px', animationDuration: '20s' }} />
    <div className="bubble bubble-5" style={{ top: '8%', right: '28%', width: '180px', height: '180px', animationDuration: '16s' }} />
  </div>
);

export default BgBubbles;
