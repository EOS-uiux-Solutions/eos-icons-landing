import React from 'react'

/**
 * @name PageHeader
 * @param {string} size takes a size value between small or medium
 * @param {string} theme taks a string color from orange or purple theme.
 * @example
 * <PageHeader theme="purple" size="small>
 */
const PageHeader = (props) => {
  /* We destructure the props pased to the component */
  const { children, size: height, theme: color } = props

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

  const { size, theme } = config

  return (
    <div
      className={`page-header ${size[height] ?? size.small} ${
        theme[color] ?? theme.orange
      }`}
    >
      {children}
    </div>
  )
}

export default PageHeader
