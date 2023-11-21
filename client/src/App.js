import './App.css';
import React, { useEffect, useState } from 'react';
import Patient from './components/patient';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <Patient />
      </header>
    </div>
  );
}

export default App;
