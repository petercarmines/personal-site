import React, { useState, useEffect } from 'react';

const NameAnimation = () => {
  const name = 'Peter Carmines';
  const [clickedLetters, setClickedLetters] = useState({});
  const [movingLetters, setMovingLetters] = useState({});

  useEffect(() => {
    console.log('NameAnimation rendered with name:', name);
  }, []);

  const handleClick = (index) => {
    console.log('Letter clicked:', name[index], 'at index:', index);
    setClickedLetters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setMovingLetters((prev) => ({
      ...prev,
      [index]: !prev[index],
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
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;