import {useState} from 'react';
import {cn} from '@/lib/utils';
import { skills } from '../data/portfolio';



const categories = ['all', 'core', 'tool'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors durantion-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="gradient-border p-6 rounded-lg shadow-xs card-hover flex flex-col h-full"
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              
              {skill.category === 'core' && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
