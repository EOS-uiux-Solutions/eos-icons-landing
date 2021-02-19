import React, { useState, useEffect } from 'react'
import bunny from '../assets/images/eos-bunny.png'

const ThankYou = (props) => {
  const {
    fn,
    timestamp,
    shouldDownload: { download, setDownload }
  } = props

  const [time, setTime] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)
      } else {
        clearTimeout(timer)
        fn({ timestamp, shouldDownload: { download, setDownload } })
        setDownload(false)
      }
    }, 1000)
  })

  return (
    <div className='container text-center'>
      <h2>Thank you for using EOS!</h2>
      <img src={bunny} alt='EOS Bunny' style={{ width: 170 }} />
      <p>
        Download will begin in {time} seconds or click below to start
        downloading
      </p>
    </div>
  )
}

export default ThankYou
