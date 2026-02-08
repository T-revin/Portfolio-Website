import {ArrowRight, ExternalLink, GithubIcon} from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { projects } from '../data/portfolio';



export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
    <section id="projects" className="py-14 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          A selection of my recent work showcasing my skills and knowledge
          learned through my time in education, professional experience and
          personal endeavors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group gradient-border rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
               
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center w-full">
                  {project.hasCaseStudy ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-sm font-medium text-primary hover:underline underline-offset-4 w-full text-center"
                    >
                      View Case Study
                    </button>
                  ) : (
                    <div className="flex space-x-3">
                      <a
                        href={project.demoURL}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink />
                      </a>
                      <a
                        href={project.gitHubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/T-revin"
          >
            Link to my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      </>
  );
};
