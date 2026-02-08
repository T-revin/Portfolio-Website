import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl border border-primary/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button - Floats top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-[1]" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-[2]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 shadow-black drop-shadow-lg">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm font-medium border border-primary/30 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Context (Problem, Solution, Impact) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Problem Section */}
              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-primary">
                  <span className="bg-primary/20 p-1.5 rounded-lg">🎯</span> The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.problem}
                </p>
              </section>

              {/* Solution Section */}
              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-primary">
                  <span className="bg-primary/20 p-1.5 rounded-lg">💡</span> The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.solution}
                </p>
              </section>

              {/* Impact Section */}
              <section className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-primary">
                  <span className="bg-primary/20 p-1.5 rounded-lg">🚀</span> Key Results
                </h3>
                <p className="text-foreground font-medium leading-relaxed">
                  {project.details.impact}
                </p>
              </section>
            </div>

            {/* Right Column: Sidebar (Tech Stack, etc) */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <h3 className="font-semibold mb-4 text-lg">Tech Stack Details</h3>
                <ul className="space-y-2">
                  {project.details.techStackDetails.map((tech, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Links if available */}
               <div className="flex flex-col gap-3">
                  {project.demoURL && project.demoURL !== '#' && (
                    <a 
                      href={project.demoURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      View Live Demo <ArrowRight size={16} />
                    </a>
                  )}
                  {project.gitHubUrl && project.gitHubUrl !== '#' && (
                    <a 
                      href={project.gitHubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-input bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      View Source Code
                    </a>
                  )}
               </div>
            </div>
          </div>

          {/* Optional Architecture Image */}
          {project.details.architectureImage && (
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
              <div className="rounded-xl overflow-hidden border border-border bg-muted/20">
                <img 
                  src={project.details.architectureImage} 
                  alt="System Architecture" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide if image loads fail (placeholder)
                  }}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
