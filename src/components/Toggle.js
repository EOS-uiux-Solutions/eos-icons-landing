import React from 'react'

const Toggle = (props) => {
  const { onClick, onChange, name, id, checkedStatus, disabledStatus } = props

  return (
    <div className={`toggle ${disabledStatus ? 'disabled' : ''}`}>
      <span className='label-name'>{name}</span>
      <input
        className='toggle-checkbox'
        id={id}
        type='checkbox'
        checked={checkedStatus}
        onClick={onClick}
        onChange={onChange}
        disabled={disabledStatus}
      />
      <label
        className={`toggle-label ${disabledStatus ? 'disabled' : ''}`}
        htmlFor={id}
      >
        <span className={`toggle-button ${disabledStatus ? 'disabled' : ''}`} />
      </label>
    </div>
  )
}

export default Toggle
