import React from 'react'
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import Landing from './components/Landing/Landing'
import Main from './components/Main/Main'



function App() {
  return (


    <div className="app">
      <Navbar  />
      <Landing />
      <Main id="main" />
      
    </div>
  );
}

export default App;
