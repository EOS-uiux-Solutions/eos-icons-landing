import React from 'react';

const Button = props => {
  const { children, primary, action } = props
  const btnClass = primary ? 'btn-primary' : 'btn-default'
  return (
    <button className={`btn ${btnClass}`} action={action} >
      {children}
    </button >
  )
}

export default Button
