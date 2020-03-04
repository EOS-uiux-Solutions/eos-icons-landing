import React from 'react'
import { Router } from '@reach/router'
import './assets/scss/index.scss'

/* Pages */
import Home from './pages/Home'
import Cheatsheet from './pages/Cheatsheet'
import Customize from './pages/Customize'
import Docs from './pages/Docs'

/* Componets */
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import '../node_modules/eos-icons/dist/extended/css/eos-icons-extended.css'
import 'eos-icons/dist/extended/css/eos-icons-extended.css'

/* Store */
import { EosIconStore, eosIconsState } from './utils/EosIcons.store'

function App () {
  return (
    <EosIconStore.Provider value={eosIconsState}>
      <div className='App'>
        <Navigation />
        <div className='app-container'>
          <Router>
            <Home path='/' />
            <Cheatsheet path='/cheatsheet' />
            <Customize path='/customize' />
            <Docs path='/docs' />
            <ThankYou path='/thankyou' />
          </Router>
        </div>
        <Footer />
      </div>
    </EosIconStore.Provider>
  )
}

export default App
