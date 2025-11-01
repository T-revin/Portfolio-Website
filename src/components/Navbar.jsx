import {useEffect, useState} from 'react';
import {cn} from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-backgroud/80 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >
      <div v className="container flex items-center justify-between">
        <a>
          <span>
            <span className="text-glow">TFernando</span> Portfolio
          </span>
        </a>
      </div>
    </nav>
  );
};
