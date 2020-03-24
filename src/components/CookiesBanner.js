import React, {useState, useEffect, useReducer} from 'react'
import { iconsReducer, eosIconsState } from '../utils/EosIcons.store'
import Button from '../components/Button'
import Cookies from 'js-cookie'

const CookiesBanner = () => {
  const [cookiesBanner, setCookiesBanner] = useState(false)
  const [state, dispatch] = useReducer(iconsReducer, eosIconsState)

  const [cookiesAcceptance, setCookiesAcceptance] = useState(false)

  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    setCookiesBanner(true)
    return callback
  }

  useEffect(() => {
    const acceptanceStatus = Cookies.get('acceptance-remainder')
    setCookiesAcceptance(Cookies.get('acceptance'))

    if (acceptanceStatus) {
      setCookiesBanner(true)
    }
  }, [cookiesBanner])

  return (
    <div className={cookiesBanner
                  ? 'cookies-alert hide'
                  : 'cookies-alert'}>
      <div className='cookies-alert-body'>
        <p>
          The EOS icons uses cookies to help us learn more about how we can improve the design system.
          <br />
          <a href='/cookies-policy'>Learn more about our cookie policy</a>
        </p>
      </div>
      <div className='cookies-alert-buttons'>
        <Button primary='primary' onClick={event =>  window.location.href='/cookies-policy'}>
          Edit preferences
        </Button >
        <Button onClick={() => toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE_COOKIES', cookiesAcceptance:cookiesAcceptance }))}>
          Accept
        </Button >
      </div>
    </div>
  )
}

export default CookiesBanner
