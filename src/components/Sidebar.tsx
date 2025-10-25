import React, { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/react';
import { getLanguageFromPath } from '../i18n/language-utils';
import type { Language } from '../i18n/types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const { t } = useTranslation(currentLang);

  // Get current language from URL
  useEffect(() => {
    const lang = getLanguageFromPath(window.location.pathname);
    setCurrentLang(lang);
  }, []);

  const navItems = [
    { href: `/${currentLang}/`, label: t('navigation.home') },
    { href: `/${currentLang}/solutions/disaster-recovery`, label: t('navigation.solutions.disasterRecovery') },
    { href: `/${currentLang}/#solutions`, label: t('navigation.solutions.cybersecurity') },
    { href: `/${currentLang}/#solutions`, label: t('navigation.solutions.development') },
    { href: `/${currentLang}/blog`, label: t('navigation.blog') },
    { href: `/${currentLang}/docs`, label: t('navigation.docs') },
    { href: `/${currentLang}/contact`, label: t('navigation.contact') },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('sidebar-active');
    } else {
      document.body.classList.remove('sidebar-active');
    }

    return () => {
      document.body.classList.remove('sidebar-active');
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}
        role="navigation"
        aria-label={t('common.aria.mainNavigation')}
      >
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="sidebar-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
