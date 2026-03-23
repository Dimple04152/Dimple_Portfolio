import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-center section-container fade-in">
      <div className="hero-content">
        <h4 className="greeting">Hello, I'm</h4>
        <h1 className="name text-gradient">Dimple Yadav</h1>
        <h2 className="title">Software Engineer & Data Science Enthusiast</h2>
        
        <p className="summary">
          A passionate Computer Science Engineering student (minor in Data Science) at Lovely Professional University.
          I specialize in building intelligent, data-driven applications and robust backend architectures. 
          Driven by a curiosity for AI and backend engineering, I thrive on turning complex problems into elegant, scalable solutions.
        </p>
        
        <div className="cta-container">
          <a href="/specialized-cv.pdf" download="Dimple_Yadav_AI_Data_CV.pdf" className="btn-primary">
            Download Specialized CV (AI/DS)
          </a>
          <a href="/general-cv.pdf" download="Dimple_Yadav_General_SWE_CV.pdf" className="btn-outline">
            Download General CV (SWE)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
