import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
import mueLogo from '../assets/mue.svg';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <div className="brand">
            <div className="brand-logo">
              <img src={mueLogo} alt="Mue logo" className="logo-icon" />
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
              <FaGooglePlay className="store-icon" aria-label="Google Play" />
              <span className="store-text">
                <span className="store-small">GET IT ON</span>
                <span className="store-big">Google Play</span>
              </span>
            </a>

            <a href="#" className="store-badge apple">
              <FaApple className="store-icon" aria-label="Apple" />
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
              <FaEnvelope className="contact-icon-svg" />
              <span className="contact-text">support@mue.app</span>
            </div>

            <div className="contact-item">
              <FaLinkedinIn className="contact-icon-svg" />
              <span className="contact-text">@MueApp</span>
            </div>

            <div className="contact-item">
              <FaInstagram className="contact-icon-svg" />
              <span className="contact-text">@mue_app</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>© 2025 Mue. HUMIC Enginneering All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
