import React, { useState, useEffect } from 'react';
import '../ShootingStars.css';

const ShootingStars = ({ verticalRange, verticalOffset }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 10; i++) { // Adjust number of stars as needed
        const speed = Math.random() * 2 + 1; // Random speed for variety
        const newStar = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * verticalRange + verticalOffset, // Adjust vertical range and offset
          opacity: Math.random() * 0.8 + 0.2, // Random opacity
          speed,
          hasTail: Math.random() > 0.5 // Randomly decide if the star has a tail
        };
        newStars.push(newStar);
      }
      setStars(newStars);
    };

    generateStars();

    const intervalId = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          // Update position based on speed
          let newX = star.x + star.speed;

          // Handle star disappearance when outside viewport
          if (newX > window.innerWidth) {
            newX = -10; // Reset position to the left
            star.y = Math.random() * verticalRange + verticalOffset; // Reset vertical position
          }

          return { ...star, x: newX };
        })
      );
    }, 16); // Lower interval for smoother animation

    return () => clearInterval(intervalId);
  }, [verticalRange, verticalOffset]);

  return (
    <div className="shooting-stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`shooting-star ${star.hasTail ? 'with-tail' : ''}`}
          style={{
            opacity: star.opacity,
            transform: `translate(${star.x}px, ${star.y}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
