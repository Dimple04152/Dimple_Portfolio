import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-container">
      <h2 className="section-title">About Me & Education</h2>
      <div className="about-grid">
        
        <div className="about-text glass-panel p-6">
          <p>
            I am a highly motivated Computer Science student deeply passionate about Backend Development, Data Science, and Machine Learning. Throughout my academic journey, I have cultivated a strong foundation in algorithm design, scalable system architectures, and data engineering pipelines.
          </p>
          <p>
            My goal is to leverage data insights and modern software engineering practices to solve impactful, real-world problems. Whether it is building intelligent APIs with FastAPI or deriving actionable trends using Pandas and Power BI, I am committed to continuous learning and excellence.
          </p>
          
          <div className="quick-facts mt-6">
            <div className="fact-item">
              <span className="fact-label text-gradient">Location:</span> Jalandhar Cantt, Punjab
            </div>
            <div className="fact-item">
              <span className="fact-label text-gradient">Email:</span> dimpleya4@gmail.com
            </div>
          </div>
        </div>

        <div className="education-timeline">
          <div className="edu-card glass-panel fade-in">
            <div className="edu-year text-gradient">Aug 2023 – 2027</div>
            <h3>Bachelor of Technology - Computer Science and Engineering</h3>
            <p className="institution">Lovely Professional University, Phagwara, Punjab</p>
            <p className="edu-details">• CGPA: 8.02<br/>• Minor in Data Science</p>
          </div>

          <div className="edu-card glass-panel fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="edu-year text-gradient">Apr 2020 – Mar 2022</div>
            <h3>12th Intermediate</h3>
            <p className="institution">Kendriya Vidyalaya No. 1, Jalandhar Cantt</p>
            <p className="edu-details">• Percentage: 88.0%</p>
          </div>

          <div className="edu-card glass-panel fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="edu-year text-gradient">Apr 2019 – Mar 2020</div>
            <h3>10th Matriculation</h3>
            <p className="institution">Kendriya Vidyalaya No. 1, Jalandhar Cantt</p>
            <p className="edu-details">• Percentage: 93.0%</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
