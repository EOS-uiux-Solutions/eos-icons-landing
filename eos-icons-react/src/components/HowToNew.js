import React from 'react'

const HowToPanel = props => {
  const { show, close, icon } = props

  return (
    (show ?
      <div className='how-to-use-block'>
        <div className='container'>
          <h2>
            How to use it:
            <small className='float-right'>
              <i className='eos-icons md-18' onClick={() => { close() }}>
                close
              </i>
            </small>
          </h2>
          <div className='input-group'>
            <input
              id='copy-code'
              className='input-group-element input-grow'
              readOnly='readOnly'
              value={`<img src='${icon}'/>`}
            />
            <a className='btn btn-primary' target='_blank' rel="noopener noreferrer" href={`https://gitlab.com/SUSE-UIUX/eos-icons/raw/master/animated-svg/${icon}.svg?inline=false`}>
              <i className="eos-icons md-18">file_download</i>
              Download icon
            </a>
          </div>
          <strong>Tags:</strong>
          <span key='' className='badge'>
            <small>test</small>
          </span>
        </div>
      </div >
      : ''
    )
  )
}

export default HowToPanel
