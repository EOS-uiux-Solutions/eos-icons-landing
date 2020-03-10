import React from 'react'

const Toggle = props => {
  const { onClick, name } = props

  return (
    <div className='toggle'>
      <span className='label-name'>{name}</span>
      <input
        className='toggle-checkbox'
        id='js-toggle-picker'
        type='checkbox'
        onClick={onClick}
      />
      <label className='toggle-label' htmlFor='js-toggle-picker'>
        <span className='toggle-button' />
      </label>
    </div >
  )
}

export default Toggle
