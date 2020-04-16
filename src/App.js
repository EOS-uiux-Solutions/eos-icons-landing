import React, { useReducer } from 'react'
import { Router } from '@reach/router'
import { iconsReducer, eosIconsState } from './utils/EosIcons.store'
import '../node_modules/eos-icons/dist/css/eos-icons.css'
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
import ScrollToTopBtn from './components/ScrollToTop'
import AppContext from './utils/AppContext'
import CookiesBanner from './components/CookiesBanner'

const App = () => {
  const [state, dispatch] = useReducer(iconsReducer, eosIconsState)
  const icons = state.icons;

  /* Create an array with categories */
  const categories = Array.from(new Set(icons.map(ele => {
    if (typeof ele.category === 'string') return ele.category
    if (typeof ele.category === 'object') return ele.category[0]
  })))

  const filteredByCategories = categories.map(category => {
    console.log('category: ', category);
    return icons.map(icon => {
      if (icon.category === category || icon.category[0] === category) return icon
    })
  })
  console.log('filteredByCategories: ', filteredByCategories);

  const x = filteredByCategories.map(categoryArray => {

    // return {
    //   category: categoryArray[0].category,
    //   icons: categoryArray.map(ele => ele)
    // }
  })

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
            <PageNotFound path='*' />
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
