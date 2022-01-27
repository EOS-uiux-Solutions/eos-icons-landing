import React, { useReducer } from 'react'
import { Router } from '@reach/router'
import { iconsReducer, eosIconsState } from './utils/EosIcons.store'
import TagManager from 'react-gtm-module'
// import '../node_modules/eos-icons/dist/css/eos-icons.css'
import './assets/scss/index.scss'
import { GTM } from './config.json'

/* Pages */
// import Home from './pages/Home'
import Home from './pages/Home'
import Docs from './pages/Docs'
import PageNotFound from './pages/PageNotFound'
import CookiesPage from './pages/Cookies'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import Cheatsheet from './pages/Cheatsheet'

/* Componets */
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import ScrollToTopBtn from './components/ScrollToTop'
import AppContext from './utils/AppContext'
import CookiesBanner from './components/CookiesBanner' 

const tagManagerArgs = {
  gtmId: GTM
}

TagManager.initialize(tagManagerArgs)

const App = () => {
  const [state, dispatch] = useReducer(iconsReducer, eosIconsState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Navigation />
        <div className='app-container'>
          <Router primary={false}>
              <Home path='/' />
              <Docs path='/docs' />
              <CookiesPage path='/cookies-policy' />
              <ThankYou path='/thankyou' />
              <PageNotFound path='*' />
              <AboutPage path='/about' />
              <TeamPage path='/team' />
              <Cheatsheet path='/cheatsheet' />
          </Router>
          <ScrollToTopBtn />
        </div>
        <CookiesBanner />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
