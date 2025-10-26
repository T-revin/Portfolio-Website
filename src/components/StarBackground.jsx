import {useEffect, useState} from 'react';

// id, size, x, y, opaacity, animation duration for each star
// id, size, x, y, detlay, animation duration for each meteor

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1 and 4 pixels
        x: Math.random() * 100, // X position in percentage
        y: Math.random() * 100, // Y position in percentage
        opactity: Math.random() * 0.5 + 0.5, // Opacity between 50% and 100%
        animationDuration: Math.random() * 4 + 2, // Animation duration between 2s and 6s
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Size between 2 and 3 pixels
        x: Math.random() * 100, // X position in percentage
        y: Math.random() * 20, // Y position in percentage
        delay: Math.random() * 15, // Delay between 0s and 15s
        animationDuration: Math.random() * 3 + 3, // Animation duration between 3s and 6s
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opactity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + 'px',
            height: meteor.size + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};
