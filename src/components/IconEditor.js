import React, { useState, useEffect } from 'react'
import { SketchPicker } from 'react-color'
import Button from './Button'
import axios from 'axios'
import loading from '../assets/images/loading-white.svg'

const IconEditor = (props) => {
  const apiBaseUrl = 'https://eos-icons-picker-api.herokuapp.com/'

  const { isActive, show, iconName } = props

  const [color, setColor] = useState('#000000')
  const [rotateAngle, setRotateAngle] = useState(0)

  const [generating, setGenerate] = useState(false)

  const changeColor = (color) => {
    setColor(color.hex)
  }

  const rotateIcon = (angle) => {
    angle += rotateAngle
    setRotateAngle(angle)
  }

  useEffect(() => {
    document.getElementsByClassName('icon-preview')[0].style.color = color
    document
      .getElementsByClassName('icon-preview')[0]
      .getElementsByTagName(
        'i'
      )[0].style.transform = `rotate(${rotateAngle}deg)`
  }, [rotateAngle, color])

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
    if (!generating) {
      e.preventDefault()
      setGenerate(true)
      postDataToApi({
        url: `${apiBaseUrl}icon-customization`,
        payload: {
          icons: [iconName],
          exportAs: 'svg',
          customizationConfig: { colorCode: color, rotateAngle: rotateAngle }
        }
      }).then((res) => {
        setGenerate(false)
        downloadCustomizedIcon({ timestamp: res })
      })
    }
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
            <div className='transform-div'>
              <p>Transform</p>
              <div>
                <p>Rotate</p>
                <button onClick={() => rotateIcon(-90)}>
                  <i className='eos-icons'>rotate_left</i>
                </button>
                <button onClick={() => rotateIcon(90)}>
                  <i className='eos-icons'>rotate_right</i>
                </button>
              </div>
            </div>
          </div>
          <div className='icon-div'>
            <p>Icon Preview</p>
            <div className='icon-preview'>
              <i className='eos-icons'>{iconName}</i>
            </div>
            <div className='export-btn'>
              <Button primary type='button' onClick={generateCustomizedIcon}>
                {!generating ? (
                  <span>
                    <i className='eos-icons eos-18'>file_download</i> Export as
                    SVG
                  </span>
                ) : (
                  <span>
                    Exporting Icon{' '}
                    <img
                      className='btn-loading-icon'
                      src={loading}
                      alt='loading-icon'
                    />
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default IconEditor
