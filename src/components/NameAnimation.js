import React, { useState, useMemo } from 'react';

const NameAnimation = () => {
  const name = 'Peter Carmines';

  // State: keep track of which letters are moving
  const [movingLetters, setMovingLetters] = useState(new Set());

  // Persistent random motion values for each letter
  const randomMotionValues = useMemo(() => {
    const values = {};
    name.split('').forEach((_, index) => {
      values[index] = {
        '--rand-x1': Math.random() * 2 - 1,
        '--rand-y1': Math.random() * 2 - 1,
        '--rand-x2': Math.random() * 2 - 1,
        '--rand-y2': Math.random() * 2 - 1,
        '--rand-x3': Math.random() * 2 - 1,
        '--rand-y3': Math.random() * 2 - 1,
        '--rand-x4': Math.random() * 2 - 1,
        '--rand-y4': Math.random() * 2 - 1,
      };
    });
    return values;
  }, [name]);

  const handleClick = (index) => {
    setMovingLetters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // stop animation if clicked again
      } else {
        newSet.add(index); // start animation
      }
      return newSet;
    });
  };

  return (
    <div className="name-container" data-testid="name-container">
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${movingLetters.has(index) ? 'moving' : ''}`}
          onClick={() => handleClick(index)}
          data-testid={`letter-${index}`}
          style={randomMotionValues[index]}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;
