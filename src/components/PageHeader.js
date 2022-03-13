import React from 'react'
import useWindow from '../hooks/useWindow'

/* Create a config object with the classes neded as the size and theme */
const config = {
  size: {
    small: 'page-header-small',
    medium: 'page-header-medium'
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
  const { children, size: height, simple, showHeaderIcon } = props
  const { size } = config

  return (
    <div
      className={
        !simple
          ? `page-header ${size[height] ?? size.small}`
          : 'page-header-simple'
      }
      style={{
        padding: windowsSize.isScrolled
          ? 0
          : windowsSize.isMobile
          ? 0
          : `40px 0`
      }}
    >
      <div className='page-header-wrapper'>
        <div className={`container`}>
          {showHeaderIcon && (
            <h1
              style={{
                display: windowsSize.isScrolled ? 'none' : ''
              }}
            >
              More than 1000 free icons
            </h1>
          )}

          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
