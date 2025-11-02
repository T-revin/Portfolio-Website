import {ArrowRight, ExternalLink, GithubIcon} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Group Allocation Web App',
    description:
      'A web application that automates the process of allocating students into groups based on various criteria such as preferences and availability. Built using React for the frontend, connected to a SQL Database using backend API built with Express.js.',
    image: '/projects/CSEConnect.jpg',
    tags: [
      'React',
      'Express.js',
      'SQL Database',
      'Web Development',
      'Group Project',
    ],
    demoURL: '#',
    gitHubUrl: '#',
  },
  {
    id: 2,
    title: 'Power BI Dashboard for Student Outcomes Analysis',
    description:
      'A Power BI dashboard that visualises student outcomes data to identify trends and insights. The dashboard includes interactive charts and graphs to help stakeholders make data-driven decisions.',
    image: '/projects/DataDashboard.png',
    tags: ['Power BI', 'Data Visualisation', 'Data Analysis'],
    demoURL: '#',
    gitHubUrl: '#',
  },
  {
    id: 3,
    title: 'Excel Based Student Performance Tracker',
    description:
      'An Excel workbook designed to track and analyse student performance over time. The tracker focuses on the key metric of student grades, using formulas and visual cues to assist day-to-day monitoring and long-term analysis.',
    image: '/projects/DataManagement.png',
    tags: ['Microsoft Excel', 'Data Analysis', 'Data Management'],
    demoURL: '#',
    gitHubUrl: '#',
  },
];

export const ProjectsSection = () => {
  return (
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
                <div className="flex justify-between items-center">
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
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/T-revin"
          >
            Link to my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
