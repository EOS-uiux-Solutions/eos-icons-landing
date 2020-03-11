import React, { useState } from 'react'
import Button from './Button'

const HowToPanel = props => {
  const { show } = props

  return (
    (show ?
      <div className='how-to-use-block'>
        <div className='container'>
          <h2>
            How to use it:
        <small className='float-right'>
              <i className='eos-icons md-18'>
                close
          </i>
            </small>
          </h2>
          <div className='input-group'>
            <input
              id='copy-code'
              className='input-group-element input-grow'
              readOnly='readOnly'
              value={`<img src/>`}
            />
            <Button primary
              type='button'
              onClick={() => {
                document.getElementById('copy-code').select()
                document.execCommand('copy')
              }}
            >
              <i className='eos-icons md-18'>content_copy</i> Copy
        </Button>
          </div>
          <strong>Tags:</strong>
          <span key='' className='badge'>
            <small>test</small>
          </span>
        </div>
      </div>
      : ''
    )
  )
}

export default HowToPanel
