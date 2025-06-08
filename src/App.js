import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('Edit src/App.js and save to reload.');

  const handleClick = () => {
    setText('The text has been updated!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <button onClick={handleClick} className="App-button">
          Change Text
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
