import React from 'react'
import downloadIcon from '../assets/images/download-icons.png'

const DownloadEosIcons = () => {
  return (
    <a
      className='download-eos-icons-button'
      href='https://www.npmjs.com/package/eos-icons'
    >
      <img
        className='download-icons-logo'
        src={downloadIcon}
        alt='download icons'
      />
      <strong>
        <small className='download-icons-text'>Get our icons set from NPM</small>
      </strong>
    </a>
  )
}

export default DownloadEosIcons
