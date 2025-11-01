const skills = [
  //frontend skills
  {name: 'HTML/CSS', level: 90, category: 'frontend'},
  {name: 'JavaScript', level: 85, category: 'frontend'},
  {name: 'React', level: 80, category: 'frontend'},

  //backend skills
  {name: 'Node.js', level: 70, category: 'backend'},
  {name: 'Express.js', level: 65, category: 'backend'},
  {name: 'SQL', level: 75, category: 'backend'},
  {name: 'Python', level: 80, category: 'backend'},

  //tools
  {name: 'Microsoft Excel', level: 90, category: 'tools'},
  {name: 'Tableau', level: 70, category: 'tools'},
  {name: 'Power BI', level: 65, category: 'tools'},
  {name: 'VS Code', level: 95, category: 'tools'},
  {name: 'Figma', level: 60, category: 'tools'},
  {name: 'GitHub', level: 85, category: 'tools'},
  {name: 'Jupyter Notebooks', level: 80, category: 'tools'},
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 container="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
