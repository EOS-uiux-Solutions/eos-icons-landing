import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import Button from './Button'

const IconEditor = (props) => {
  const { isActive, show, iconName } = props

  const [color, setColor] = useState('#fff')

  const changeColor = (color) => {
    setColor(color.hex)
  }

  return isActive ? (
    <div className='icon-editor'>
      <div className='icon-editor-card'>
        <div className='close' onClick={show} />
        <h2>Customize Icon</h2>
        <div className='flex flex-row icon-editor-content'>
          <div>
            <p>Color Picker</p>
            <SketchPicker
              className='color-picker'
              color={color}
              onChangeComplete={changeColor}
            />
          </div>
          <div className='icon-div'>
           <p>Icon Preview</p>
            <div className='icon'>
              <i className='eos-icons' style={{ color: `rgb: (${color})` }}>
                {iconName}
              </i>
            </div>
            <Button primary type='button'>
              <i className='eos-icons eos-18'>file_download</i> Export as SVG
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default IconEditor
