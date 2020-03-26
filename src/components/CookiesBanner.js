import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import Cookies from 'js-cookie'

const CookiesBanner = () => {
  const [cookiesBanner, setCookiesBanner] = useState(false)

  /* Toggle customizable functionality */
  const cookiesHandler = () => {
    Cookies.set('acceptance', 'true', { expires: 60 })
    Cookies.set('cookies-preference', 'true')
    Cookies.set('acceptance-remainder', 'true')
    setCookiesBanner(true)
  }

  useEffect(() => {
    const acceptanceStatus = Cookies.get('acceptance-remainder')
    console.log()
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
              <Button onClick={cookiesHandler}>
                Accept
              </Button >
            </div>
          </div>
  )
}

export default CookiesBanner
