import React from 'react'
import Button from './Button'

const HowToPanel = props => {
  const { show, close, iconName, type, iconTags } = props

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
          {type === 'animated' ? (
            <div className='input-group'>
              <input
                className='input-group-element input-grow'
                readOnly='readOnly'
                value={`<img src='${iconName}'/>`}
              />
              <a className='btn btn-primary' target='_blank' rel="noopener noreferrer" href={`https://gitlab.com/SUSE-UIUX/eos-icons/raw/master/animated-svg/${iconName}.svg?inline=false`}>
                <i className="eos-icons md-18">file_download</i>
                Download icon
            </a>
            </div>
          ) : (
              <>
                <div className='input-group'>
                  <input
                    id='copy-code'
                    className='input-group-element input-grow'
                    readOnly='readOnly'
                    value={`<i class='eos-icons'>${iconName}</i>`}
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
                {iconTags.map(tag =>
                  <span key='' className='badge'>
                    <small>{tag}</small>
                  </span>
                )}
              </>
            )
          }
        </div>
      </div >
      : ''
    )
  )
}

export default HowToPanel
