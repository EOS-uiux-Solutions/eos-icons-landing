import React, { useEffect } from 'react'
import Button from './Button'
 
const ScrollToTop = () => {
  window.scrollTo(0,0)
}

const ScrollToTopBtn = () => {
  return (
      <button className="scroll-to-top-btn" onClick={ScrollToTop}>
        <i className='eos-icons md-24 '>keyboard_arrow_up</i>
      </button >
)
}


export default ScrollToTopBtn