import React from 'react';
import { useTranslation } from '../i18n/react';

interface NavigationProps {
  currentPath?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
  const { t } = useTranslation();

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  return (
    <nav id="navigation" className="nav" role="navigation" aria-label={t('common.aria.mainNavigation')}>
      <div className="nav-container">
        <div className="nav-brand">
          <a href="/">
            <img
              src="/assets/images/logo_black.png"
              alt={t('common.logoAlt')}
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