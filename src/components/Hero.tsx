import React from 'react';
import { useTranslation } from '../i18n/react';
import type { Language } from '../i18n/types';

interface HeroProps {
  lang?: Language;
}

const Hero: React.FC<HeroProps> = ({ lang = 'en' }) => {
  const { t } = useTranslation(lang);

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
            <a href={`/${lang}/contact`} className="btn btn-primary">{t('hero.cta.contactUs')}</a>
            <a href="#solutions" className="btn btn-secondary">{t('hero.cta.learnMore')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;