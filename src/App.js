import React, { Component } from 'react';
import './App.css';
import NameAnimation from './components/NameAnimation';
import LogoHeader from './components/LogoHeader';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red' }}>Error: {this.state.error?.message || 'Unknown error'}</div>;
    }
    return this.props.children;
  }
}

function App() {
  console.log('App component rendered');
  return (
    <div className="app">
      <ErrorBoundary>
        <NameAnimation />
      </ErrorBoundary>
    </div>
  );
}

export default App;