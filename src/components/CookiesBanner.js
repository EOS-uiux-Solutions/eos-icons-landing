import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import Cookies from 'js-cookie'

const CookiesBanner = () => {
  const [cookiesBanner, setCookiesBanner] = useState(false)
  
  const acceptCookies = () => {
    // Track when the user accept this cookie.
    Cookies.set('acceptance', 'true', { expires: 60 })
    setCookiesBanner(true)
  }

  useEffect(() => {
    const acceptanceStatus = Cookies.get('acceptance')
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
          <a href='/cookies-policy.html'>Learn more about our cookie policy</a>
        </p>
      </div>
      <div className='cookies-alert-buttons'>
        <Button primary='primary' onClick={event =>  window.location.href='/cookies-policy.html'}>
          Edit preferences
        </Button >
        <Button onClick={acceptCookies}>
          Accept
        </Button >
      </div>
    </div>
  )
}

export default CookiesBanner
