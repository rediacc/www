import React from 'react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, benefits }) => (
  <div className="solution-card">
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
  </div>
);

const Solutions: React.FC = () => {
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
      title: "Accelerated Development Operations",
      description: "Instant environment provisioning for testing, staging, and development. No more waiting hours or days for production-like environments.",
      benefits: [
        "Environment setup from days to minutes",
        "Instant production-like testing environments",
        "Streamlined development workflows"
      ]
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
      title: "Next-Generation Disaster Recovery",
      description: "Continuous, lightweight snapshots enable rapid restoration with minimal infrastructure overhead using Smart deduplication storage architecture.",
      benefits: [
        "5X-10X reduction in backup overhead",
        "Minutes instead of hours for recovery",
        "No costly duplicate infrastructure required"
      ]
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
      title: "AI-Safe Infrastructure Operations",
      description: "Native support for Model Context Protocol (MCP) enabling AI systems like Claude Code and Gemini to safely interact with infrastructure through instant production clones.",
      benefits: [
        "Safe sandbox environments for AI experimentation",
        "Instant production clones for testing",
        "Zero production risk rollback capabilities"
      ]
    }
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Three Converging Solutions</h2>
          <p className="section-subtitle">
            Rediacc addresses the speed mismatch with instant infrastructure operations
            designed for the AI era.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;