import React from 'react';

const LogoHeader = () => {
  return (
    <div className="header">
      <img
        src="https://via.placeholder.com/50?text=PC"
        alt="Peter Carmines Logo"
        className="logo"
      />
      <a
        href="https://www.linkedin.com/in/peter-carmines"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default LogoHeader;