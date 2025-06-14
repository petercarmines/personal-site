import React from 'react';
import './App.css';
import NameAnimation from './components/NameAnimation';
import CosmicBackground from './components/CosmicBackground';
import LogoHeader from './components/LogoHeader';

function App() {
  return (
    <div className="app">
       <LogoHeader />
      <NameAnimation />
      <CosmicBackground />
    </div>
  );
}

export default App;