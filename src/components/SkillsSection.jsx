import { useState } from 'react';
import { cn } from '@/lib/utils';
import { skills, projects } from '../data/portfolio';
import { SkillCard } from './SkillCard';

const tabs = [ 'engineering', 'analysis', 'visualisation','all',];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const toolSkills = skills.filter((skill) => skill.category === 'tool');
  const mainSkills = skills.filter((skill) => skill.category !== 'tool');

  const filteredSkills =
    activeTab === 'all'
      ? mainSkills
      : mainSkills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Core <span className="text-primary">Competencies</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium',
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-primary/20'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredSkills.map((skill) => (
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
