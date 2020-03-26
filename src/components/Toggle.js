import React from 'react'

const Toggle = props => {
  const { onClick, name, id, checkedStatus, disabledStatus} = props

  return (
    <div className='toggle'>
      <span className='label-name'>{name}</span>
      <input
        className='toggle-checkbox'
        id={id}
        type='checkbox'
        checked={checkedStatus}
        onClick={onClick}
        disabled={disabledStatus}
      />
      <label className='toggle-label' htmlFor={id}>
        <span className='toggle-button' />
      </label>
    </div >
  )
}

export default Toggle
