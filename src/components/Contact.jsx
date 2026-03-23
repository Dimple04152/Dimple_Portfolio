import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-content glass-panel fade-in">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's Connect</h2>
          <p className="contact-desc">
            Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
          </p>
          
          <div className="contact-links">
            <a href="mailto:dimpleya4@gmail.com" className="contact-card">
              <span className="icon">✉</span>
              <span>dimpleya4@gmail.com</span>
            </a>
            <a href="tel:+917696158324" className="contact-card">
              <span className="icon">📞</span>
              <span>+91 7696158324</span>
            </a>
            <a href="https://linkedin.com/in/dimple-yadav-tech" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Dimple04152" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="icon">⌨</span>
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Dimple Yadav. Built with React & Vite.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
