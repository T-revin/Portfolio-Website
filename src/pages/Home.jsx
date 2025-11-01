import {ThemeToggle} from '../components/ThemeToggle.jsx';
import {StarBackground} from '@/components/StarBackground';
import {Navbar} from '@/components/Navbar.jsx';
import {HeroSection} from '@/components/HeroSection.jsx';
import {AboutSection} from '@/components/AboutSection.jsx';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle Button*/}
      <ThemeToggle />
      {/*Background Effects*/}
      <StarBackground />
      {/*Navbar*/}
      <Navbar />
      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      {/*Footer*/}
    </div>
  );
};
