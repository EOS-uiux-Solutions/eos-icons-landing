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
  const [horizontalFlip, setHorizontalFlip] = useState(false)
  const [verticalFlip, setVerticalFlip] = useState(false)

  const [generating, setGenerate] = useState(false)

  const changeColor = (color) => {
    setColor(color.hex)
  }

  const rotateIcon = (angle) => {
    angle += rotateAngle
    setRotateAngle(angle)
  }

  const flipIconHorizontal = (e) => {
    e.preventDefault()
    setHorizontalFlip(!horizontalFlip)
  }

  const flipIconVertical = (e) => {
    e.preventDefault()
    setVerticalFlip(!verticalFlip)
  }

  useEffect(() => {
    document.getElementsByClassName('icon-preview')[0].style.color = color
    document
      .getElementsByClassName('icon-preview')[0]
      .getElementsByTagName('i')[0].style.transform = `scaleX(${
      horizontalFlip ? -1 : 1
    }) scaleY(${verticalFlip ? -1 : 1}) rotate(${rotateAngle}deg)`
  }, [rotateAngle, color, horizontalFlip, verticalFlip])

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
          customizationConfig: {
            colorCode: color,
            rotateAngle: rotateAngle,
            flip: { horizontal: horizontalFlip, vertical: verticalFlip }
          }
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
              <div>
                <p>Flip</p>
                <button onClick={flipIconHorizontal}>
                  <i className='eos-icons'>flip</i>
                </button>
                <button onClick={flipIconVertical}>
                  <i className='eos-icons rotate-flip-icon'>flip</i>
                </button>
              </div>
            </div>
          </div>
          <div className='icon-div'>
            <p>Icon Preview</p>
            <div className='icon-preview'>
              <i className='eos-icons'>{iconName}</i>
            </div>
            <p>Select Image Format</p>
            <div className='dropdown fill-dropdown'>
              <select>
                <option value='SVG'>SVG</option>
                <option value='PNG'>PNG</option>
              </select>
            </div>
            <p>Select Size</p>
            <div className='dropdown fill-dropdown'>
              <select>
                <option value='24'>24x24</option>
                <option value='48'>48x48</option>
                <option value='64'>64x64</option>
                <option value='128'>128x128</option>
              </select>
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
