import React, { useState } from 'react';
import { SUPPORTED_LANGUAGES, getLanguageName, getLanguageFlag } from '../i18n/language-utils';
import type { Language } from '../i18n/types';

interface LanguageSwitcherProps {
  currentLang: Language;
  availableLanguages: { lang: Language; url: string }[];
  showFallbackNotice?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  availableLanguages,
  showFallbackNotice = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // If only one language available, don't show switcher
  if (availableLanguages.length <= 1 && !showFallbackNotice) {
    return null;
  }

  return (
    <div className="language-switcher">
      {showFallbackNotice && (
        <div className="translation-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>Este contenido no está disponible en {getLanguageName(currentLang).toLowerCase()}. Mostrando versión en inglés.</span>
        </div>
      )}

      <div className="language-selector">
        <button
          className="language-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <span className="language-flag">{getLanguageFlag(currentLang)}</span>
          <span className="language-name">{getLanguageName(currentLang)}</span>
          <svg
            className={`chevron ${isOpen ? 'open' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {isOpen && (
          <div className="language-menu">
            {availableLanguages.map(({ lang, url }) => (
              <a
                key={lang}
                href={url}
                className={`language-option ${lang === currentLang ? 'active' : ''}`}
              >
                <span className="flag">{getLanguageFlag(lang)}</span>
                <span className="name">{getLanguageName(lang)}</span>
                {lang === currentLang && <span className="checkmark">✓</span>}
              </a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .language-switcher {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .translation-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background-color: #fff3cd;
          border: 1px solid #ffc107;
          border-radius: 6px;
          color: #856404;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .translation-notice svg {
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .language-selector {
          position: relative;
          display: inline-block;
          width: fit-content;
        }

        .language-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #f5f5f5;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          color: #333;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s;
        }

        .language-trigger:hover {
          background-color: #eeeeee;
          border-color: #d0d0d0;
        }

        .language-flag {
          font-size: 1rem;
        }

        .chevron {
          transition: transform 0.2s;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .language-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.25rem;
          background-color: white;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 1000;
          min-width: 160px;
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          color: #333;
          text-decoration: none;
          font-size: 0.9rem;
          transition: background-color 0.2s;
        }

        .language-option:hover {
          background-color: #f5f5f5;
        }

        .language-option.active {
          background-color: #e8f0ff;
          color: #0066cc;
          font-weight: 500;
        }

        .language-option .flag {
          font-size: 1rem;
        }

        .language-option .checkmark {
          margin-left: auto;
          color: #0066cc;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .translation-notice {
            font-size: 0.8rem;
            padding: 0.6rem 0.75rem;
          }

          .language-trigger {
            padding: 0.4rem 0.75rem;
            font-size: 0.85rem;
          }

          .language-option {
            padding: 0.6rem 0.75rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
