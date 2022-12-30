import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayerProvider from './context/PlayerContext';
import PackProvider from './context/PackContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PackProvider type={''} name={''} inventory={[]}>
      <PlayerProvider origin={''} survivorOption={''} misterHandyOptions={[]} special={{
        s: 0,
        p: 0,
        e: 0,
        c: 0,
        i: 0,
        a: 0,
        l: 0
      }} atouts={[]} postHuman={false} defence={{
        balistique: 0,
        energetique: 0,
        radiation: 0,
        poison: 0
      }} inventory={{pack:[],other:[]}}>
        <App />
      </PlayerProvider>
    </PackProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
