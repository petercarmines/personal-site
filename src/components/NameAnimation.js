import React, { useState } from 'react';

const NameAnimation = () => {
  const name = 'Peter Carmines';
  const [movingIndex, setMovingIndex] = useState(null); // no letter moves initially

  const handleClick = (index) => {
    // If clicking the already moving letter, stop all
    if (movingIndex === index) {
      setMovingIndex(null);
    } else {
      setMovingIndex(index);
    }
  };

  return (
    <div className="name-container" data-testid="name-container">
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${movingIndex === index ? 'moving' : ''}`}
          onClick={() => handleClick(index)}
          data-testid={`letter-${index}`}
          style={{
            '--rand-x1': Math.random() * 2 - 1,
            '--rand-y1': Math.random() * 2 - 1,
            '--rand-x2': Math.random() * 2 - 1,
            '--rand-y2': Math.random() * 2 - 1,
            '--rand-x3': Math.random() * 2 - 1,
            '--rand-y3': Math.random() * 2 - 1,
            '--rand-x4': Math.random() * 2 - 1,
            '--rand-y4': Math.random() * 2 - 1,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;
