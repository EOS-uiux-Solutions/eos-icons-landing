import React from 'react'

const Button = ({ children, primary, action, type, onClick, customClass }) => {
  const btnClass = primary ? 'btn-primary' : 'btn-default'
  return (
    <button
      className={`btn ${btnClass} ${customClass}`}
      action={action}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
