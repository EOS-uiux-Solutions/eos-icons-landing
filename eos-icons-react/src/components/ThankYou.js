import React, { useState } from 'react'
import bunny from '../assets/images/eos-bunny.png'
import Button from './Button'

const ThankYou = props => {
  const { timestamp } = props

  let [timer, setTimer] = useState(5)

  const downloadFont = () => {
    const downloadEndPoints = `https://eos-icons-picker-api.herokuapp.com/download?ts=${timestamp}`
    return window.open(downloadEndPoints, '_blank')
  }

  const timing = () => {
    const timerInterval = setInterval(() => {
      if (timer >= 0) {
        setTimer(timer--)
      } else {
        clearInterval(timerInterval)
        downloadFont()
      }
    }, 1000)
  }

  return (
    <div className='container text-center'>
      <h2>Thank you for using EOS!</h2>
      <img src={bunny} alt='EOS Bunny' onLoad={timing} style={{ width: 170 }} />
      <p>
        Download will begin in {timer} seconds or click below to start
        downloading
      </p>
      <Button primary type='submit' onClick={downloadFont}>
        EOS-custom-font.zip
      </Button>
    </div>
  )
}

export default ThankYou
