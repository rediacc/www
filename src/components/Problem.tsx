import React from 'react';

const Problem: React.FC = () => {
  const openImageModal = (src: string, alt: string) => {
    // This function will be available from the global script
    if (typeof window !== 'undefined' && (window as any).openImageModal) {
      (window as any).openImageModal(src, alt);
    }
  };

  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Speed Mismatch Crisis</h2>
          <p className="section-subtitle">
            When production environments have terabytes of data but sandbox environments only sync monthly,
            teams face impossible choices that lead to dangerous workarounds.
          </p>
        </div>
        <div className="problem-content">
          <div className="scenario-grid">
            <div className="scenario-column">
              <div className="problem-scenario">
                <h3>The Reality: Frustrated Teams, Dangerous Workarounds</h3>
                <div className="scenario-illustration">
                  <img
                    src="/assets/images/problem.svg"
                    alt="Problem scenario showing frustrated stakeholders dealing with slow traditional workflows"
                    className="scenario-image clickable-image"
                    onClick={() => openImageModal('/assets/images/problem.svg', 'Problem scenario showing frustrated stakeholders dealing with slow traditional workflows')}
                  />
                </div>
              </div>
            </div>
            <div className="scenario-column">
              <div className="solution-scenario">
                <h3>The Solution: Rediacc Platform</h3>
                <div className="scenario-illustration">
                  <img
                    src="/assets/images/solution.svg"
                    alt="Solution scenario showing Rediacc platform with instant production clones"
                    className="scenario-image clickable-image"
                    onClick={() => openImageModal('/assets/images/solution.svg', 'Solution scenario showing Rediacc platform with instant production clones')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;