import {AtmosphereBackground} from '@/components/AtmosphereBackground';
import {Navbar} from '@/components/Navbar.jsx';
import {HeroSection} from '@/components/HeroSection.jsx';
import {AboutSection} from '@/components/AboutSection.jsx';
import {SkillsSection} from '@/components/SkillsSection.jsx';
import {ProjectsSection} from '../components/ProjectsSection.jsx';
import {ContactSection} from '../components/ContactSection.jsx';
import {Footer} from '../components/Footer.jsx';

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Layer 0: The Background (Absolute) */}
      <div className="fixed inset-0 z-0">
        <AtmosphereBackground />
      </div>

      {/* Layer 10: The Content (Relative) */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
};
