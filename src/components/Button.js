import React from 'react'

const Button = ({ children, primary, action, type, onClick }) => {
  const btnClass = primary ? 'btn-primary' : 'btn-default'
  return (
    <button
      className={`btn ${btnClass}`}
      action={action}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
