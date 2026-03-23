import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'RockWatch: AI Rockfall Early Warning System',
      tech: 'Python, Scikit-learn, TensorFlow',
      date: 'Oct 2025 - Dec 2025',
      description: 'Predictive model for rockfall timing/location using multi-source data (geotechnical sensors, micro seismic events). Built classification/regression pipeline for early warnings.',
      link: 'https://github.com/Dimple04152/RockWatch',
      image: '/rockwatch.png'
    },
    {
      title: 'Nutrient Variability Analysis',
      tech: 'Python, Pandas, Matplotlib, Seaborn',
      date: 'Apr 2025 - May 2025',
      description: 'Analyzed USDA FoodData Central dataset (8,000+ items) to study macronutrient conversion variability. Identified outliers and method-dependent differences.',
      link: 'https://github.com/Dimple04152/Nutrient-Analysis-FoodData-Central',
      image: '/nutrient.png'
    },
    {
      title: 'Maldives Tourism Performance Dashboard',
      tech: 'Power BI, Python (ETL)',
      date: 'Nov 2025 - Dec 2025',
      description: 'Extracted multi-year tourism data from PDFs; built interactive Power BI dashboard with slicers revealing occupancy rates and airline dominance.',
      link: 'https://github.com/Dimple04152/tourism-etl-project',
      image: '/tourism.png'
    },
    {
      title: 'Educational Insights Dashboard',
      tech: 'Excel, PivotTables, Slicers',
      date: 'Apr 2025 - May 2025',
      description: 'Analyzed Pune school enrollment dataset (6,075 schools) mapping zonal distribution and management diversity.',
      link: 'https://linkedin.com/in/Dimple-Yadav-Tech',
      image: '/educational_dashboard.png'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-panel fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            {/* Image Placeholder - User can replace src later */}
            <div className="project-image-placeholder">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-tech text-gradient">{project.tech}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  View Source / Post
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
