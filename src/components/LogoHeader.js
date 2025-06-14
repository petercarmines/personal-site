import React, { useEffect } from 'react';

const LogoHeader = () => {
  useEffect(() => {
    console.log('LogoHeader rendered');
  }, []);

  return (
    <div className="header">
      <img
        src="../images/linkedin.png"
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