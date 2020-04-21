import React, { useState } from 'react'
import bunny from '../assets/images/eos-bunny.png'

const ThankYou = props => {
  const { fn, timestamp } = props

  const [timer, setTimer] = useState(5)

  const timing = () => {
    const timerInterval = setInterval(() => {
      if (timer >= 0) {
        const timeDown = timer - 1
        setTimer(timeDown)
      } else {
        clearInterval(timerInterval)
        fn({ timestamp })
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
    </div>
  )
}

export default ThankYou
