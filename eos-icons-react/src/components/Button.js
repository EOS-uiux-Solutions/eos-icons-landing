import React from 'react';

const Button = props => {
  const { children, primary } = props
  const btnClass = primary ? 'btn-primary' : 'btn-default'
  return (
    <div className={`btn ${btnClass}`} >
      {children}
    </div >
  )
}

export default Button
