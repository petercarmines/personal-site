import React from 'react';
import './App.css';
import NameAnimation from './components/NameAnimation';
import CosmicBackground from './components/CosmicBackground';
import LogoHeader from './components/LogoHeader';

function App() {
  return (
    <div className="app">
      <CosmicBackground />
      <LogoHeader />
      <NameAnimation />
    </div>
  );
}

export default App;