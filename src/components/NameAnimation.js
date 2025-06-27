import React, { useState, useEffect } from 'react';

const NameAnimation = () => {
  const name = 'Peter Carmines';
  const [clickedLetters, setClickedLetters] = useState({});
  const [movingLetters, setMovingLetters] = useState({});

  useEffect(() => {
    const initialMoving = {};
    name.split('').forEach((_, i) => {
      initialMoving[i] = true;
    });
    setMovingLetters(initialMoving);
  }, [name]);

  const handleClick = (index) => {
    console.log('Letter clicked:', name[index], 'at index:', index);
    setClickedLetters((prev) => ({
      ...prev,
      [index]: true,
    }));
    setMovingLetters((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  if (!name) {
    console.error('Name is undefined');
    return <div style={{ color: 'red' }}>Error: Name not defined</div>;
  }

  return (
    <div className="name-container" data-testid="name-container">
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${clickedLetters[index] ? 'clicked' : ''} ${movingLetters[index] ? 'moving' : ''}`}
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
