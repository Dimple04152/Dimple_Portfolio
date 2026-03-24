import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section-container fade-in">
      <div className="hero-content">
        <div className="hero-text">
          <h4 className="greeting slide-up" style={{ animationDelay: '0.1s' }}>Hello, I'm</h4>
          <h1 className="name text-gradient slide-up" style={{ animationDelay: '0.2s' }}>Dimple Yadav</h1>
          <h2 className="title slide-up" style={{ animationDelay: '0.3s' }}>Software Engineer & Data Science Enthusiast</h2>

          <p className="summary slide-up" style={{ animationDelay: '0.4s' }}>
            A passionate <span className="highlight-pulse">Computer Science Engineering</span> student (minor in Data Science) at Lovely Professional University.
            I specialize in building <span className="highlight-pulse">intelligent, data-driven applications</span> and robust backend architectures.
            Driven by a curiosity for <span className="highlight-pulse">AI and backend engineering</span>, I thrive on turning complex problems into elegant, scalable solutions.
          </p>

          <div className="cta-container slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="/specialized-cv.pdf" download="Dimple_Yadav_AI_Data_CV.pdf" className="btn-primary">
              Download Specialized CV (AI/DS)
            </a>
            <a href="/general-cv.pdf" download="Dimple_Yadav_General_SWE_CV.pdf" className="btn-outline">
              Download General CV (SWE)
            </a>
          </div>
        </div>

        <div className="profile-image-wrapper slide-up" style={{ animationDelay: '0.6s' }}>
          <img
            src="public/profilePic.jpeg"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
