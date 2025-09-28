import React from 'react';

const EarlyAccess: React.FC = () => {
  return (
    <section className="early-access" id="early-access">
      <div className="container">
        <div className="early-access-content">
          <div className="early-access-text">
            <h2 className="section-title">Get Early Access</h2>
            <p className="section-subtitle">
              Be among the first to experience infrastructure automation designed for accelerated development.
              Join our early access program and revolutionize your development workflows.
            </p>
            <ul className="early-access-benefits">
              <li>Priority access to Rediacc platform</li>
              <li>Direct input on feature development</li>
              <li>Exclusive early adopter pricing</li>
              <li>Dedicated implementation support</li>
            </ul>
          </div>
          <div className="early-access-form">
            <form
              name="early-access"
              method="POST"
              action="mailto:contact@rediacc.com?subject=Early%20Access%20Request%20-%20Rediacc%20Platform"
              encType="text/plain"
              className="form"
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  aria-describedby="name-error"
                  autoComplete="name"
                />
                <div className="form-error" id="name-error" role="alert" aria-live="polite"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  aria-describedby="email-error"
                  autoComplete="email"
                />
                <div className="form-error" id="email-error" role="alert" aria-live="polite"></div>
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company / Organization *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  required
                  aria-describedby="company-error"
                  autoComplete="organization"
                />
                <div className="form-error" id="company-error" role="alert" aria-live="polite"></div>
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">Role / Title</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="form-input"
                  autoComplete="organization-title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="use-case" className="form-label">Primary Use Case</label>
                <select id="use-case" name="use-case" className="form-select">
                  <option value="">Select your primary interest</option>
                  <option value="development-acceleration">Accelerated Development Operations</option>
                  <option value="disaster-recovery">Next-Generation Disaster Recovery</option>
                  <option value="ai-safe-operations">AI-Safe Infrastructure Operations</option>
                  <option value="multiple">Multiple Use Cases</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows={4}
                  placeholder="Tell us about your infrastructure challenges or specific requirements..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Request Early Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;