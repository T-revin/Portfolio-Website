import {Code, User, Briefcase} from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Bridging the Gap Between Raw Data & Decision Making
            </h3>
            <p className="text-muted-foreground">
              With over 1.5 years of experience in the Industy, 
              I specialise in transforming complex datasets into clear, actionable insights.
              Currently serving as an Information Systems Developer 
              for a London-based higher education institution, 
              I manage data pipelines that support operational decisions for a large student body.
            </p>

            <p className="text-muted-foreground">
              I leverage a background in Full-Stack Development from the engineering of data pipelines 
              to the building the custom internal tools and interactive dashboards (Power BI, Tableau). 
              This allows me to not just analyze data, 
              but to build the infrastructure that makes data accessible to 
              non-technical stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="ocean-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-panel glass-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Operational Analytics</h4>
                  <p className="text-muted-foreground">
                    Experienced in identifying bottlenecks. 
                    I use Power BI and SQL to visualise Key Performance Indicators (KPIs), 
                    helping management reduce response times and optimise resource allocation.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel glass-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Process Automation</h4>
                  <p className="text-muted-foreground">
                    I don't just report on data; I improve how it flows. 
                    Experienced in using Power Automate to replace manual data entry 
                    with automated workflows, ensuring 100% data accuracy and reducing workload.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-panel glass-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Application Building
                  </h4>
                  <p className="text-muted-foreground">
                    I build custom applications that turn complex data into
                    intuitive user experiences. From full-stack development to
                    interactive dashboards, I create tools that empower teams to
                    make data-driven decisions with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
