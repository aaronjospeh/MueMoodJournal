import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h4>Mue</h4>
//           <p>Your personal journaling companion</p>
//         </div>

//         <div className="footer-section">
//           <h5>Quick Links</h5>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h5>Support</h5>
//           <ul>
//             <li><a href="mailto:support@mue.com">Contact Us</a></li>
//             <li><a href="#privacy">Privacy Policy</a></li>
//             <li><a href="#terms">Terms of Service</a></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h5>Follow Us</h5>
//           <ul>
//             <li><a href="#twitter">Twitter</a></li>
//             <li><a href="#instagram">Instagram</a></li>
//             <li><a href="#facebook">Facebook</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {currentYear} Mue. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/Footer.jsx
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <div className="brand">
            <div className="brand-logo">
              <span className="brand-emoji">🙂</span>
            </div>
            <h2 className="brand-name">Mue</h2>
          </div>

          <p className="footer-tagline">
            With a clear vision of nurturing emotional well-being, Mue empowers
            you to understand, embrace, and express your feelings freely —
            helping you build a healthier mind, one mood at a time.
          </p>

          <a href="#" className="learn-more">
            Learn More &gt;&gt;
          </a>

          <div className="store-links">
            <a href="#" className="store-badge google">
              <span className="store-icon">▶</span>
              <span className="store-text">
                <span className="store-small">GET IT ON</span>
                <span className="store-big">Google Play</span>
              </span>
            </a>

            <a href="#" className="store-badge apple">
              <span className="store-icon"></span>
              <span className="store-text">
                <span className="store-small">Download on the</span>
                <span className="store-big">App Store</span>
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <div className="footer-section">
            <h3 className="footer-heading">Address</h3>
            <p className="footer-text footer-address-title">
              Mue Headquarters
            </p>
            <p className="footer-text">Jl. Harmoni Raya No. 27,</p>
            <p className="footer-text">Jakarta Selatan, Indonesia</p>
            <p className="footer-text">12540</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Reach Us</h3>

            <div className="contact-item">
              <span className="contact-icon contact-icon-square">✉</span>
              <span className="contact-text">support@mue.app</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon contact-icon-circle">in</span>
              <span className="contact-text">@MueApp</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon contact-icon-circle">◎</span>
              <span className="contact-text">@mue_app</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
