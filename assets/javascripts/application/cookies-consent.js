$(function () {
  /* Create Cookie controler for acceptance and setup modification. */
  cookieController()
})

const cookieController = () => {
  /* eslint-disable no-undef */
  const cookieController = {
    // When the user accept the cookies, we write the cookies witht he configuration.
    accept: () => {
      // Cookie we use for GTM, in order to track the user needs to accept this cookie.
      Cookies.set('acceptance', 'true', { expires: 60 })
      // Cookie we use to hide the Cookies Alert once the user accepts the cookie.
      Cookies.set('cookies-preference', 'true')
      // Cookie we use to hide the Cookies Alert once the user accepts the cookie.
      Cookies.set('acceptance-remainder', 'true')
      $('.js-cookies-alert').fadeOut()
    },
    trackOff: () => {
      Cookies.remove('cookies-preference')
      Cookies.remove('acceptance')
      setTimeout(() => {
        window.location.reload(true)
      }, 1000)
    }
  }

  /* Cookie we use for GTM, in order to track the user needs to accept this cookie. */
  const acceptanceCookie = Cookies.get('acceptance')
  /* Cookie we use to remeber users prefferance (track on/off) */
  const preferenceCookies = Cookies.get('cookies-preference')
  /* Cookie we use to hide the Cookies Alert once the user accepts the cookie. */
  const acceptanceReminder = Cookies.get('acceptance-remainder')
  /* If the user never clicks Accept, we show the banner (display: none by default) */
  if (!acceptanceReminder) {
    $('.js-cookies-alert').css('display', 'flex')
  }
  /* If acceptance Cookies is present, set the cookies-preference On. */
  if (acceptanceCookie) {
    Cookies.set('cookies-preference', 'true')
  }
  /**
  * The Default setup for cookies is off (acceptance = undefined )
  * If user accept the cookies, write te cookie and fire the GTM events.
  */
  $('.js-cookies-accept').on('click', () => {
    cookieController.accept()
  })
  /**
  * If cookies are accepted, we turn ON the cookie toggle configuration in our cookies page.
  * If the box is clicked again, we turn tracking and toggle off.
  */
  if (preferenceCookies) {
    $('.js-analytics-tracking').prop('checked', true)
    $('.js-analytics-tracking').on('click', () => {
      if (preferenceCookies) {
        cookieController.trackOff()
      }
    })
  }
  /* When status of the toggle changes from off to on, restore the cookies. */
  if (!preferenceCookies) {
    $('.js-analytics-tracking').on('click', () => {
      cookieController.accept()
    })
  }
}
