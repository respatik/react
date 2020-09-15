import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counterclass from './Component/Counterclass'
import Counterfunction from './Component/Counterfunction'

function App() {
  return (
    <div>
    <Counterclass />
    <hr/>
    <Counterfunction />
    </div>
  );
}

export default App;
