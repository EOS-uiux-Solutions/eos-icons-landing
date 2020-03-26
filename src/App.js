import React, { useReducer } from 'react'
import { Router } from '@reach/router'
import { iconsReducer, eosIconsState } from './utils/EosIcons.store'
import '../node_modules/eos-icons/dist/extended/css/eos-icons-extended.css'
import './assets/scss/index.scss'

/* Pages */
import Home from './pages/Home'
import Cheatsheet from './pages/Cheatsheet'
import Docs from './pages/Docs'
import PageNotFound from './pages/PageNotFound'
import CookiesPage from './pages/Cookies'


/* Componets */
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import AppContext from './utils/AppContext'
import CookiesBanner from './components/CookiesBanner'

const App = () => {
  const [state, dispatch] = useReducer(iconsReducer, eosIconsState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Navigation />
        <div className='app-container'>
          <Router primary={false}>
            <Home path='/' />
            <Cheatsheet path='/cheatsheet' />
            <Docs path='/docs' />
            <CookiesPage path='/cookies-policy' />
            <ThankYou path='/thankyou' />
            <PageNotFound path="*"/>
          </Router>
        </div>
        <CookiesBanner />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
