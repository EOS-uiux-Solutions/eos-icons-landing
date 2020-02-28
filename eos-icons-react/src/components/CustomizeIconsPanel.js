import React, { useState } from 'react'
import Button from './Button'
const CustomizeIconsPanel = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='container icons-picker-footer'>
      <h6 className='select-all-icons' onClick={''}>
        Select all <i className='eos-icons'>select_all</i>
      </h6>
      <h6 className='deselect-all-icons' onClick={''}>
        Deselect all <i className='eos-icons'>clear</i>
      </h6>
      <div className='generate-div'>
        <h6>{count} icons selected</h6>
        <Button primary type='submit' onClick={''}>
          Generate font
        </Button>
      </div>
    </div>
  )
}

export default CustomizeIconsPanel
