import { CheckCircle2 } from 'lucide-react';

export const SkillCard = ({ skill, allProjects, onOpenProject }) => {
  const relatedProjects = skill.relatedProjectIds
    ? skill.relatedProjectIds.map((id) =>
        allProjects.find((project) => project.id === id)
      ).filter(Boolean)
    : [];

  return (
    <div className="gradient-border p-5 rounded-lg shadow-xs card-hover flex flex-col h-full bg-background/40 hover:bg-background/60 transition-colors text-left">
      <div className="mb-3">
        <h3 className="font-bold text-lg">{skill.name}</h3>
      </div>

      <div className="flex-grow">
          {skill.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          )}
      </div>

      {relatedProjects.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
            <CheckCircle2 size={12} /> Implemented in:
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => onOpenProject(project.id)}
                className="inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-secondary/30 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                title={`View ${project.title}`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
