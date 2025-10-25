import React from 'react';
import { useTranslation } from '../i18n/react';
import type { Language } from '../i18n/types';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  href?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, benefits, href }) => {
  const CardContent = (
    <>
      <div className="solution-icon">
        {icon}
      </div>
      <h3 className="solution-title">{title}</h3>
      <p className="solution-description">{description}</p>
      <ul className="solution-benefits">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      {href && (
        <div className="solution-card-footer">
          <span className="learn-more-link">
            Learn More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className="solution-card solution-card-link">
        {CardContent}
      </a>
    );
  }

  return (
    <div className="solution-card">
      {CardContent}
    </div>
  );
};

interface SolutionsProps {
  lang?: Language;
}

const Solutions: React.FC<SolutionsProps> = ({ lang = 'en' }) => {
  const { t, to } = useTranslation(lang);
  const solutionsData = to('solutions.items');

  const solutions = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="8" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M8 16h32" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
          <circle cx="16" cy="12" r="1" fill="currentColor"/>
          <circle cx="20" cy="12" r="1" fill="currentColor"/>
          <path d="M16 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 36h32l-4 8H12l-4-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: solutionsData[0]?.title || '',
      description: solutionsData[0]?.description || '',
      benefits: solutionsData[0]?.benefits || [],
      href: `/${lang}/solutions/disaster-recovery`
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M24 4L6 16v20c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V16L24 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M24 4v36" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: solutionsData[1]?.title || '',
      description: solutionsData[1]?.description || '',
      benefits: solutionsData[1]?.benefits || []
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="16" cy="16" r="3" fill="currentColor"/>
          <circle cx="32" cy="16" r="3" fill="currentColor"/>
          <circle cx="24" cy="32" r="3" fill="currentColor"/>
          <path d="M16 19l8 10 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: solutionsData[2]?.title || '',
      description: solutionsData[2]?.description || '',
      benefits: solutionsData[2]?.benefits || []
    }
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('solutions.title')}</h2>
          <p className="section-subtitle">
            {t('solutions.subtitle')}
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              benefits={solution.benefits}
              href={solution.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;