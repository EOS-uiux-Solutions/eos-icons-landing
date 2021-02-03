import React, { useRef, useEffect, useState } from 'react'
import Button from './Button'
import IconEditor from './IconEditor'

const HowToPanel = (props) => {
  const { show, close, iconName, type, iconTags } = props
  const ref = useRef()

  const [iconEditor, setIconEditor] = useState(false)
  const [iconType, setIconType] = useState('static')
  const iconEditorToggle = (type) => {
    setIconType(type)
    setIconEditor(!iconEditor)
  }

  function useOnClickOrEsc(ref, handler) {
    useEffect(() => {
      const listenerKeydown = (event) => {
        if (event.keyCode === 27) {
          handler(event)
        }
      }

      document.addEventListener('keydown', listenerKeydown)

      return () => {
        document.removeEventListener('keydown', listenerKeydown)
      }
    }, [ref, handler])
  }

  useOnClickOrEsc(ref, () => close())

  return show ? (
    <div ref={ref} className='how-to-use-block'>
      <div className='container'>
        <span>How to use it:</span>

        <i className='close-button eos-icons eos-18' onClick={() => close()}>
          close
        </i>

        {type === 'animated' ? (
          <div className='how-to-use-block-left'>
            <div className='input-group'>
              <div className='input-group-information'>
                <input
                  id='copy-code'
                  className='input-group-element'
                  readOnly='readOnly'
                  value={`<img src='${iconName}.svg'/>`}
                />
                <Button
                  type='button'
                  onClick={() => {
                    document.getElementById('copy-code').select()
                    document.execCommand('copy')
                  }}
                >
                  <i className='eos-icons eos-18'>content_copy</i>
                </Button>
              </div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`https://gitlab.com/SUSE-UIUX/eos-icons/raw/master/animated-svg/${iconName}.svg?inline=false`}
              >
                <Button primary type='button'>
                  <i className='eos-icons eos-18'>file_download</i> Download
                  icon
                </Button>
              </a>
              <Button
                primary
                type='button'
                onClick={() => iconEditorToggle('animated')}
              >
                <i className='eos-icons eos-18'>edit</i> Edit Icon
              </Button>
            </div>
          </div>
        ) : (
          <div className='how-to-use-block-left'>
            <div className='input-group'>
              <div className='input-group-information'>
                <input
                  id='copy-code'
                  className='input-group-element'
                  readOnly='readOnly'
                  value={`<i class='eos-icons'>${iconName}</i>`}
                />
                <Button
                  type='button'
                  onClick={() => {
                    document.getElementById('copy-code').select()
                    document.execCommand('copy')
                  }}
                >
                  <i className='eos-icons eos-18'>content_copy</i>
                </Button>
              </div>
              <Button
                primary
                type='button'
                onClick={() => iconEditorToggle('static')}
              >
                <i className='eos-icons eos-18'>edit</i> Edit and download
              </Button>
            </div>
            <div>
              <strong>Tags:</strong>
              {iconTags?.map((tag, key) => (
                <span key={key} className='badge'>
                  <small>{tag}</small>
                </span>
              ))}
            </div>
          </div>
        )}
        {iconEditor ? (
          <IconEditor
            isActive={iconEditor}
            show={iconEditorToggle}
            iconNames={[iconName]}
            iconType={iconType}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  ) : (
    ''
  )
}

export default HowToPanel
