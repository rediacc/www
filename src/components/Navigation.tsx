import React from 'react';

interface NavigationProps {
  currentPath?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav id="navigation" className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="/">
            <img
              src="/assets/images/logo_black.png"
              alt="Rediacc - Infrastructure Automation Platform"
              className="logo"
              loading="eager"
              decoding="async"
              width="120"
              height="40"
            />
          </a>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${currentPath === item.href ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;