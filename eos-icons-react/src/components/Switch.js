import React from 'react'

const Switch = props => {
  const { onClick } = props

  return (
    <>
      <input
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
        onClick={onClick}
      />
      <label className='react-switch-label' htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}

export default Switch
