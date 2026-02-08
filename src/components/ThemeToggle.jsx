import {useEffect, useState} from 'react';
import {Sun, Waves} from 'lucide-react';
import {cn} from '@/lib/utils';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light'); //Local memeory to remember theme preference when page is refreshed or opened in new tab
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'glass-panel fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-all duration-300 hover:scale-110',
        'focus:hidden'
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-orange-400" />
      ) : (
        <Waves className="h-6 w-6 text-cyan-600" />
      )}
    </button>
  );
};
