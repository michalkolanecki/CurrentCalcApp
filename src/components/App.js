import React from 'react';
import './App.css';
import Nav from './Nav';
import Result from './Result';


function App() {
  return (
    <div className="App">
        <Nav/>
        <h1>CURRENT CALCULATE</h1>
        <Result/>
    </div>
  );
}

export default App;