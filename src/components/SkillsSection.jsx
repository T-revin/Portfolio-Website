import { skills, projects } from '../data/portfolio';
import { SkillCard } from './SkillCard';

export const SkillsSection = () => {
  const coreSkills = skills.filter((skill) => skill.category === 'core');
  const toolSkills = skills.filter((skill) => skill.category === 'tool');

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Core <span className="text-primary">Competencies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {coreSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} allProjects={projects} />
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Technologies & <span className="text-primary">Tools</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {toolSkills.map((skill) => (
            <div
              key={skill.id}
              className="px-4 py-2 rounded-full border border-border bg-card/50 hover:border-primary/50 transition-colors"
            >
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
