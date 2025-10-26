import {useEffect, useState} from 'react';

// id, size, x, y, opaacity, animation duration for each star

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
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
    </div>
  );
};
