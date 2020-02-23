import React, { useState } from 'react'
import bunny from '../assets/images/eos-bunny.png'

const ThankYou = () => {
  let [timer, setTimer] = useState(5)

  const downloadFont = () => {
    const downloadEndPoints =
      'https://eos-icons-picker-api.herokuapp.com/download?'
    const downloadTimeStamp = window.location.href.split('?')[1]
    const downloadUrl = downloadEndPoints + downloadTimeStamp
    window.open(downloadUrl, '_blank')
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
    <div className='container thankyou-page-container'>
      <h2>Thank you for using EOS!</h2>
      <img src={bunny} alt='EOS Bunny' onLoad={timing} />
      <p>
        Download will begin in {timer} seconds or click below to start
        downloading
      </p>
      <button
        className='btn btn-outline-secondary'
        type='submit'
        onClick={downloadFont}
      >
        EOS-custom-font.zip
      </button>
    </div>
  )
}

export default ThankYou
