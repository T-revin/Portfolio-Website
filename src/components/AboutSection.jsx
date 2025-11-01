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
              Data Professional & Web Developer
            </h3>
            <p className="text-muted-foreground">
              I'm a dedicated data professional with a strong foundation in data
              analysis and database management. I have strong skills in Excel,
              SQL, and Power BI, enabling me to extract insights and drive
              data-driven decision-making. I have applied these skills in the
              15+ months at my current role as Information Systems Developer at
              a medium sized higher education institution in London.
            </p>

            <p className="text-muted-foreground">
              Additionally, I am proficient in web development technologies such
              as HTML, CSS, and JavaScript, allowing me to create dynamic and
              user-friendly web applications. I am eager to leverage my skills
              in a challenging role that combines data expertise with web
              development. These skills were applied professionally in a 3 month
              internship as web developer working with University professor as a
              client.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {/*Add link to CV here*/}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Exeprienced in HTML, CSS, JavaScript, React, Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Collaboration</h4>
                  <p className="text-muted-foreground">
                    Exeprience working with a medium sized team in my current
                    role as Information Systems Developer to deliver custom
                    solutions. Tasks include requirement gathering, development,
                    testing and deployment of customer facing software, senior
                    management reporting dashboards and internal tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {' '}
                    Professional Skills
                  </h4>
                  <p className="text-muted-foreground">
                    Over 18 months of professional work in industry has taught
                    me valuable skills such as time management, communication
                    and adaptability.
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
