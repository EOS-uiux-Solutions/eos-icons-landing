import React from 'react';

const PageHeader = props => {
  /* We destructure the props pased to the component */
  const { children, size: height, theme: color } = props;

  /* Create a config object with the classes neded as the size and theme */
  const config = {
    size: {
      small: 'page-header-small',
      medium: 'page-header-medium',
    },
    theme: {
      orange: 'page-header-orange',
      purple: 'page-header-purple',
    }
  }

  const { size, theme } = config;

  return (
    <div className={`page-header ${size[height] ?? size.small} ${theme[color] ?? theme.orange}`}>
      {children}
    </div>
  )
}

export default PageHeader
