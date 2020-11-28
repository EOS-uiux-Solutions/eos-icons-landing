import React from 'react'
import useWindow from '../hooks/useWidow'

/* Create a config object with the classes neded as the size and theme */
const config = {
  size: {
    small: 'page-header-small',
    medium: 'page-header-medium'
  },
  theme: {
    orange: 'page-header-orange',
    purple: 'page-header-purple'
  }
}

/**
 * @name PageHeader
 * @param {string} size takes a size value between small or medium
 * @param {string} theme taks a string color from orange or purple theme.
 * @example
 * <PageHeader theme="purple" size="small>
 */
const PageHeader = (props) => {
  const [windowsSize] = useWindow()

  /* We destructure the props pased to the component */
  const { children, size: height, theme: color, simple } = props
  const { size, theme } = config

  return (
    <div
      className={
        !simple
          ? `page-header ${size[height] ?? size.small} ${
              theme[color] ?? theme.orange
            }`
          : 'page-header-simple'
      }
      style={{
        paddingTop: windowsSize.isScrolled ? 0 : `48px`,
        paddingBottom: windowsSize.isScrolled ? 0 : `48px`
      }}
    >
      <div className='page-header-wrapper'>
        <div className={`page-header-wrapper-content container`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
