import React from 'react';

interface ProblemSolutionSectionProps {
  number: number;
  title: string;
  subtitle?: string;
  problem: {
    description: string;
    story?: string;
    additionalPoints?: string[];
  };
  solution: {
    title: string;
    description: string;
    benefits: string[];
  };
  variant?: 'light' | 'dark';
  cta?: {
    text: string;
    href: string;
  };
}

const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  number,
  title,
  subtitle,
  problem,
  solution,
  variant = 'light',
  cta
}) => {
  return (
    <section className={`problem-solution-section ${variant}`}>
      <div className="container">
        <div className="section-number">
          <span className="number-badge">{number}</span>
        </div>

        <div className="section-content">
          <h2 className="section-main-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}

          <div className="problem-solution-grid">
            {/* Problem Side */}
            <div className="problem-box">
              <div className="box-header">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M16 8v8M16 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3 className="box-title">The Problem</h3>
              </div>

              <p className="problem-description">{problem.description}</p>

              {problem.story && (
                <div className="story-box">
                  <div className="story-label">Real Story:</div>
                  <p className="story-text">{problem.story}</p>
                </div>
              )}

              {problem.additionalPoints && problem.additionalPoints.length > 0 && (
                <ul className="additional-points">
                  {problem.additionalPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Solution Side */}
            <div className="solution-box">
              <div className="box-header">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="box-title">{solution.title}</h3>
              </div>

              <p className="solution-description">{solution.description}</p>

              <ul className="solution-benefits">
                {solution.benefits.map((benefit, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {cta && (
            <div className="section-cta">
              <a
                href={cta.href}
                className="btn btn-primary btn-large"
              >
                {cta.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
