import React from 'react';
import { useTranslation } from '../i18n/react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
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
            <a href="#early-access" className="btn btn-primary">{t('hero.cta.earlyAccess')}</a>
            <a href="#problem" className="btn btn-secondary">{t('hero.cta.learnMore')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;