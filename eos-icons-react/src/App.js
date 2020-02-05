import React from 'react';
import { Router, Link } from "@reach/router"
import './assets/scss/index.scss'

/* Pages */
import Home from './pages/Home'
import Cheatsheet from './pages/Cheatsheet'
import Customize from './pages/Customize'
import Docs from './pages/Docs'

/* Componets */
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return(
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Router>
        <Home path="/" />
        <Cheatsheet path="/cheatsheet" />
        <Customize path="/customize" />
        <Docs path="/docs" />
      </Router>

      <Footer />
    </div>
  )
}

export default App;
