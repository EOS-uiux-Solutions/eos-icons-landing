import React from 'react';
import { Router, Link } from "@reach/router"
import './App.css';
import Home from './components/Home'
import Cheatsheet from './components/Home'

function App() {
  return(
    <Router>
      <Home path="/" />
      <Cheatsheet path="cheatsheet" />
    </Router>
  )
}

export default App;
