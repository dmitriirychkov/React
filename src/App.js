import './App.css';

import React from 'react';

import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          className="center-animation"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
        >
          <h1>Welcome to My App</h1>
        </motion.div>
        <p className="custom-font">
          This is a sample text with a custom font.
        </p>
      </header>
    </div>
  );
}

export default App;
