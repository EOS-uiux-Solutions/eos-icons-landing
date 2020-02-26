import React from 'react';

const Button = ({ children, primary, action }) => {
  const btnClass = primary ? 'btn-primary' : 'btn-default'
  return (
    <button className={`btn ${btnClass}`} action={action} >
      {children}
    </button >
  )
}

export default Button
