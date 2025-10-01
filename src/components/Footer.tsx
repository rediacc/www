import React from 'react';
import { useTranslation } from '../i18n/react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="/assets/images/logo_white.png"
              alt={t('common.logoAlt')}
              className="footer-logo"
              loading="lazy"
              decoding="async"
              width="120"
              height="40"
            />
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-links">
            <a href="/" className="footer-link">{t('footer.links.returnToHome')}</a>
            <a href="/contact" className="footer-link">{t('footer.links.contactSupport')}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {t('footer.copyright', { year: String(currentYear) })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;