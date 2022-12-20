import React from 'react';
import './App.css';
import Origins from './components/origins/Origins';
import Special from './components/special/Special';
import Atouts from './components/atouts/Atouts';
import Statistics from './components/stats/Statistics';

function App() {
  return (
    <div className="App">
      <Origins/>
      <Special/>
      <Atouts/>
      <Statistics/>
    </div>
  );
}

export default App;
