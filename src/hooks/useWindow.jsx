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
      isMobile: window.innerWidth <= 770,
      isScrolled: window.scrollY !== 0,
      isScrooledAndMobile: window.innerWidth <= 770 && window.scrollY > 1
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
