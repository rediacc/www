import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/react';
import type { Language } from '../i18n/types';
import { EXTERNAL_LINKS, getConsoleUrl } from '../config/constants';

interface HeroProps {
  lang?: Language;
}

const Hero: React.FC<HeroProps> = ({ lang = 'en' }) => {
  const { t } = useTranslation(lang);
  const [consoleUrl, setConsoleUrl] = useState('https://console.rediacc.com/');

  useEffect(() => {
    setConsoleUrl(getConsoleUrl());
  }, []);

  return (
    <section className="hero hero-dark" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-cta">
            <div className="hero-cta-primary">
              <div className="hero-badge">
                <span className="badge-icon">✓</span>
                <span>{t('hero.cta.freeBadge')}</span>
              </div>
              <a href={consoleUrl} className="btn btn-primary">{t('hero.cta.contactUs')}</a>
              <p className="hero-cta-note">
                {t('hero.cta.benefits')}
                <br />
                <a href={`/${lang}/pricing#plans`}>{t('hero.cta.seeDetails')} →</a>
              </p>
            </div>
            <a href={EXTERNAL_LINKS.SCHEDULE_CONSULTATION} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t('hero.cta.bookDemo')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;