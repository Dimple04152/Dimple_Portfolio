import './AcademicExtras.css';

const AcademicExtras = () => {
  return (
    <section id="academic" className="section-container">
      <h2 className="section-title">Academic & Professional Achievements</h2>
      
      <div className="academic-grid">
        
        {/* Certifications & Courses */}
        <div className="academic-category glass-panel fade-in">
          <h3 className="text-gradient">Certifications & Courses</h3>
          <ul className="academic-list">
            <li>
              <h4>Agile with Atlassian Jira</h4>
              <span>Jan 2026 | Coursera</span>
            </li>
            <li>
              <h4>Data Structures & Algorithms using C++</h4>
              <span>Jun 2025 | CPE LPU</span>
            </li>
            <li>
              <h4>Computer Communications Specialization</h4>
              <span>Dec 2024 | Univ. of Colorado System via Coursera</span>
            </li>
            <li>
              <h4>The Complete Full-Stack Web Development Bootcamp</h4>
              <span>Jan 2024 | Udemy</span>
            </li>
          </ul>
        </div>

        {/* Competitive Programming & Hackathons */}
        <div className="academic-category glass-panel fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-gradient">Hackathons & Competitions</h3>
          <ul className="academic-list">
            <li>
              <h4>AI Fusion Competition - 1st Position</h4>
              <span>Feb 2025 | Advitiya'25 (IIT Ropar)</span>
              <p className="academic-desc">Secured 1st Prize among 120+ competing teams in North India's largest technical fest (25,000+ footfall).</p>
            </li>
            <li>
              <h4>Smart India Hackathon 2025</h4>
              <span>Oct 2025 | Internal Hackathon</span>
              <p className="academic-desc">Selected for SIH. Ranked in the top 10 out of 480 teams in the Internal University round at LPU.</p>
            </li>
          </ul>
        </div>

        {/* Open Source / Research */}
        <div className="academic-category glass-panel fade-in" style={{ animationDelay: '0.2s', gridColumn: '1 / -1' }}>
          <h3 className="text-gradient">Research, Open Source & Publications</h3>
          <div className="research-grid">
            <div className="research-item">
              <h4>Open Source Contributions</h4>
              <p className="academic-desc">Active contributor to algorithmic implementations and backend boilerplate templates on GitHub. (Open to exploring larger OSS frameworks).</p>
            </div>
            <div className="research-item">
              <h4>Research Publication / Patent</h4>
              <p className="academic-desc">Currently conceptualizing research around AI-Based early warning systems for natural hazards based on the RockWatch project infrastructure.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicExtras;
