import React from 'react';
import logo from './image2vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the republic of Smun.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn How to be Smun 2
        </a>
      </header>
    </div>
  );
}

export default App;
