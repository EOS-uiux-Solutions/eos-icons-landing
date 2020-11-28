import { useState, useEffect } from 'react'

export const useWindowsSize = () => {
  const [state, setState] = useState({
    width: 0,
    height: 0,
    isScrolled: false,
    isMobile: undefined
  })

  function handleWindows() {
    return setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth <= 430,
      isScrolled: window.scrollY >= 10,
      isScrooledAndMobile: window.innerWidth <= 430 && window.scrollY >= 10
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindows)
    window.addEventListener('scroll', handleWindows)

    return () => {
      window.removeEventListener('resize', handleWindows)
      window.removeEventListener('handleScroll', handleWindows)
    }
  }, [])

  return [state]
}

export default useWindowsSize
