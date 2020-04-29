import React from 'react'
import loading from '../assets/images/loading.svg'

const GeneratingFont = (props) => {
  return (
    <div className='icons-picker-loading'>
      <div className='loading-icon'>
        <img src={loading} alt='loading-icon' />
        <p>Generating font files...</p>
      </div>
    </div>
  )
}

export default GeneratingFont
