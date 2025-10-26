import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/react';
import SearchModal from './SearchModal';
import Sidebar from './Sidebar';
import { getLanguageFromPath } from '../i18n/language-utils';
import type { Language } from '../i18n/types';

const Navigation: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation(currentLang);

  // Get current language from URL
  useEffect(() => {
    const lang = getLanguageFromPath(window.location.pathname);
    setCurrentLang(lang);
  }, []);

  // Handle scroll to show/hide navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    // Set initial state
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Listen for global search hotkey event
  useEffect(() => {
    const eventName = (window as any).SEARCH_HOTKEY_EVENT || 'search:open';
    const handleSearchHotkey = () => {
      setIsSearchOpen(true);
    };

    document.addEventListener(eventName, handleSearchHotkey);
    return () => {
      document.removeEventListener(eventName, handleSearchHotkey);
    };
  }, []);

  return (
    <>
      <nav id="navigation" className={`nav ${isVisible ? 'nav-visible' : 'nav-hidden'}`} role="navigation" aria-label={t('common.aria.mainNavigation')}>
        <div className="nav-container">
          <button
            className="hamburger-btn"
            onClick={toggleSidebar}
            aria-label={t('navigation.toggleMenu')}
            aria-expanded={isSidebarOpen}
          >
            <span className="hamburger-icon"></span>
          </button>
          <a href={`/${currentLang}/`} className="nav-brand">
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
          <div className="nav-right">
            <button className="search-btn" onClick={openSearch} aria-label={t('navigation.search')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <a href="https://console.rediacc.com/" className="login-btn">{t('navigation.login')}</a>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Navigation;