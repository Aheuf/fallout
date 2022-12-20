import React from 'react';
import './App.css';
import Origins from './components/origins/Origins';
import Special from './components/special/Special';
import Atouts from './components/atouts/Atouts';
import Statistics from './components/stats/Statistics';
import Inventory from './components/inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Origins/>
      <Special/>
      <Atouts/>
      {/* COMPOSANT ETAPE 4 */}
      <Statistics/>
      <Inventory/>
    </div>
  );
}

export default App;
