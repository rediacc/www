import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Infrastructure Automation Platform for
            <span className="hero-highlight"> Accelerated Development</span>
          </h1>
          <p className="hero-subtitle">
            Accelerate development workflows with instant environment provisioning and production-like testing.
            Get accelerated development environments, next-generation disaster recovery, and AI-safe infrastructure operations.
          </p>
          <div className="hero-cta">
            <a href="#early-access" className="btn btn-primary">Request Early Access</a>
            <a href="#problem" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;