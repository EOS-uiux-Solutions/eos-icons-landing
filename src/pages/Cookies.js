import React from 'react'
import AppContext from '../utils/AppContext'
import Toogle from '../components/Toggle'
import Cookies from 'js-cookie'
import { Helmet } from 'react-helmet'

const CookiesPage = () => {
  /* Toggle customizable functionality */
  const toggleCustomize = (callback) => {
    return callback
  }

  const isAccepted = () => Cookies.get('acceptance') === 'true'

  return (
    <AppContext.Consumer>
      {({ state, dispatch }) => (
        <>
          <Helmet>
            <title>Cookie policy | EOS Icons</title>
            <meta name='robots' content='noindex' />
            <meta name='description' content='Cookie policy page' />
            <meta
              name='keywords'
              content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
            />
          </Helmet>
          <div className='container'>
            <div>
              <h1>Cookie policy</h1>
              <p className='subheadline'>
                We reserve the right to change this policy when necessary. Any
                changes to this policy will be posted here. Your continued use
                of our websites after changes have been posted will constitute
                your agreement to any such changes.
              </p>
              <hr />
              <h2>Cookie preferences</h2>
              <p>
                Some essential features on our sites just won’t work without
                cookies. And having other cookies switched off can seriously
                affect the way you’ll be able to enjoy our services.
              </p>
              <p>
                Please check your cookie settings below and turn on any cookies
                you’re happy with.
              </p>
              <p>
                “Strictly necessary” cookies can’t be turned off. But "Analytics
                / Performance" cookies can be turned on or off below. You can
                learn more about cookies and what they do in the link below.
              </p>
              <div className='cookies-preference-wrap'>
                <div className='cookie-preference-item'>
                  <div className='cookie-preference-switch'>
                    <Toogle
                      id='js-cookie-preference-switch'
                      checkedStatus
                      disabledStatus
                    />
                  </div>
                  <div className='cookie-preference-descrition'>
                    <b>Strictly necessary cookies</b>
                    <p>
                      These cookies are essential so that you can move around
                      the website and use its features. Without these cookies
                      services you have asked for cannot be provided.
                    </p>
                  </div>
                </div>
                <div className='cookie-preference-item'>
                  <div className='cookie-preference-switch'>
                    <Toogle
                      checkedStatus={isAccepted()}
                      id='js-cookie-preference'
                      onChange={() =>
                        toggleCustomize(
                          dispatch({ type: 'TOGGLE_CUSTOMIZE_COOKIES' })
                        )
                      }
                    />
                  </div>
                  <div className='cookie-preference-descrition'>
                    <b>Analytics / Performance</b>
                    <p>
                      These cookies allow us to collect data which helps us to
                      better understand how the site its being used.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <h2>Our use of cookies</h2>
              <p>
                Like many websites, EOS Icons uses 'cookies'. A cookie is a
                small file of letters and numbers that is placed on your
                computer's hard drive when you visit certain websites. We may
                use cookies to tell us, for example, whether you have visited us
                before or if you are a new visitor and to help us identify site
                features in which you may have the greatest interest. Cookies
                may enhance your online experience by saving your preferences
                while you are visiting a particular page. For more information
                on cookies, please see
                <a
                  href='www.whatarecookies.com'
                  data-event-category='External link'
                  data-event-action='Link to whatarecookies.com'
                  data-event-label='Cookies policy'
                >
                  www.whatarecookies.com
                </a>
              </p>
              <p>
                The cookies we use are 'analytics cookies' which monitor how
                visitors use our websites and give us a better understanding of
                what content visitors are spending most time reading so we can
                continue improving the user experience. The types of cookies
                used on our website are as follows:
              </p>
              <div className='cookies-table'>
                <div className='cookies-table-title'>
                  <span>Cookie type</span>
                  <span>Purpose</span>
                  <span>Name</span>
                </div>
                <div className='cookies-table-content'>
                  <div>
                    <p>Analytics / Performance</p>
                  </div>
                  <div>
                    <p>
                      These cookies are used only to help us to improve our
                      websites over time, by giving us insights into how the
                      various sections of the websites are used and how users
                      interact with the websites, for example which pages
                      visitors go to most often and whether they get error
                      messages from web pages. The information collected is
                      anonymous and statistical.
                    </p>
                  </div>
                  <div>
                    <span>AID</span>
                    <span>APISID</span>
                    <span>CAL</span>
                    <span>GAPS</span>
                    <span>HSID</span>
                    <span>NID</span>
                    <span>OGP</span>
                    <span>OGPC</span>
                    <span>PREF</span>
                    <span>SAPISID</span>
                    <span>SID</span>
                    <span>SNID</span>
                    <span>SSID</span>
                    <span>__utma</span>
                    <span>__utmb</span>
                    <span>__utmt</span>
                    <span>__utmv</span>
                    <span>__utmx</span>
                    <span>__utmxx</span>
                    <span>__utmz</span>
                    <span>_ga</span>
                    <span>_gat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default CookiesPage
