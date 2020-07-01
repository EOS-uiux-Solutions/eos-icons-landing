import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import Button from './Button'
import axios from 'axios'

const IconEditor = (props) => {
  const apiBaseUrl = 'https://eos-icons-picker-api.herokuapp.com/'

  const { isActive, show, iconName } = props

  const [color, setColor] = useState('#000000')

  const changeColor = (color) => {
    setColor(color.hex)
    document.getElementsByClassName('icon-preview')[0].style.color = color.hex
  }
  // const [serverResponse, setServerResponse] = useState(null)

  const postDataToApi = async (params) => {
    const { url, payload } = params

    const response = await axios.post(url, payload)
    return response.data
  }
  const downloadCustomizedIcon = (props) => {
    const { timestamp } = props
    const downloadEndPoints = `${apiBaseUrl}download?ts=${timestamp}`
    return window.open(downloadEndPoints, '_blank')
  }
  const generateCustomizedIcon = (e) => {
    e.preventDefault()
    postDataToApi({
      url: `${apiBaseUrl}icon-customization`,
      payload: {
        icons: [iconName],
        exportAs: 'svg',
        customizationConfig: { colorCode: color }
      }
    }).then((res) => {
      // setServerResponse(res)
      // not using server response for now since the first time state is null on automatic download
      // will use in upcoming PR
      downloadCustomizedIcon({ timestamp: res })
    })
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
            <div className='icon-preview'>
              <i className='eos-icons'>{iconName}</i>
            </div>
            <Button primary type='button' onClick={generateCustomizedIcon}>
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
