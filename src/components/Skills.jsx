import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'C']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['FastAPI', 'Pandas', 'NumPy', 'React', 'Flask', 'SQLAlchemy']
    },
    {
      title: 'Data & Visualization',
      skills: ['Power BI', 'Excel (PivotTables)', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Jira', 'Agile']
    },
    {
      title: 'Domain Knowledge',
      skills: ['Machine Learning', 'Data Structures & Algorithms', 'Computer Networks', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-panel fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="text-gradient">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
