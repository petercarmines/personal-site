import React, { useEffect } from 'react';
import LinkedInIcon from '../images/linkedin-icon.png'; // Adjust path if different

const LogoHeader = () => {
  useEffect(() => {
    console.log('LogoHeader rendered');
  }, []);

  return (
    <div className="header">
      <a
        href="https://www.linkedin.com/in/peter-carmines" // Update with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <img
          src={LinkedInIcon}
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default LogoHeader;