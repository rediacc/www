import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="/assets/images/logo_white.png"
              alt="Rediacc - Infrastructure Automation Platform"
              className="footer-logo"
              loading="lazy"
              decoding="async"
              width="120"
              height="40"
            />
            <p>Infrastructure Automation Platform for AI-Driven Operations</p>
          </div>
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rediacc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;