import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience & Training</h2>
      <div className="timeline-container">
        
        <div className="timeline-item right fade-in">
          <div className="timeline-content glass-panel">
            <span className="timeline-date text-gradient">Jan 2026 – Ongoing</span>
            <h3>Software Engineering Intern</h3>
            <h4 className="timeline-company">INFOSYS Springboard</h4>
            <ul className="timeline-details">
              <li>Designed an AI-powered stock screener backend supporting natural language financial queries via LLM → DSL → SQL pipeline.</li>
              <li>Implemented a custom SQL compiler generating safe parameterized SQL from structured DSL queries.</li>
              <li>Built REST APIs for companies, portfolios, alerts, and AI queries using FastAPI with JWT authentication.</li>
              <li>Developed data ingestion pipeline integrating Alpha Vantage and Yahoo Finance APIs with parsing, normalization, and Redis caching.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item left fade-in">
          <div className="timeline-content glass-panel">
            <span className="timeline-date text-gradient">Jun 2025 – Jul 2025</span>
            <h3>Trie-Based Auto-Suggestion System Training</h3>
            <h4 className="timeline-company">Lovely Professional University</h4>
            <ul className="timeline-details">
              <li>Designed and implemented a Trie data structure supporting insert, delete, and prefix search with frequency-based ranking in C++.</li>
              <li>Loaded 50k+ English words from public JSON dataset; added case-insensitive search and auto-insertion of new prefixes.</li>
              <li>Converted the system into a lightweight local HTTP server with zero dependencies to serve suggestions via REST API using Flask.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
