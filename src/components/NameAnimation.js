import React, { useState } from 'react';

const NameAnimation = () => {
  const name = 'Peter Carmines';
  const [clickedLetters, setClickedLetters] = useState({});

  const handleClick = (index) => {
    setClickedLetters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="name-container">
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter ${clickedLetters[index] ? 'clicked' : ''}`}
          onClick={() => handleClick(index)}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;