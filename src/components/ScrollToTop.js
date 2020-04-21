import React from 'react'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
}

window.onscroll = () => {
  if (window.scrollY > 800) {
    document.getElementsByClassName('scroll-to-top-btn')[0].style.display =
      'block'
  } else {
    document.getElementsByClassName('scroll-to-top-btn')[0].style.display =
      'None'
  }
}

const ScrollToTopBtn = () => {
  return (
    <button className='scroll-to-top-btn' onClick={ScrollToTop}>
      <i className='eos-icons eos-24 '>keyboard_arrow_up</i>
    </button>
  )
}

export default ScrollToTopBtn
