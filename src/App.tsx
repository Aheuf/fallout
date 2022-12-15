import React from 'react';
import './App.css';
import Origins from './components/origins/Origins';
import Special from './components/special/Special';
import Atouts from './components/atouts/Atouts';

function App() {
  return (
    <div className="App">
      <Origins/>
      <Special/>
      <Atouts/>
    </div>
  );
}

export default App;
