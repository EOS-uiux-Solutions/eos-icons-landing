import React, { useRef, useEffect, useState } from 'react'
import Button from './Button'
import IconEditor from './IconEditor'
const HowToPanel = (props) => {
  const { show, close, iconName, type, iconTags } = props
  const svgDownloadUrl = `https://eos-icons-picker-api.herokuapp.com/icon/svg/download/${iconName}`
  const pngDownloadUrl = `https://eos-icons-picker-api.herokuapp.com/icon/png/download/${iconName}/1000`
  const ref = useRef()

  const [iconEditor, setIconEditor] = useState(false)

  const iconEditorToggle = (e) => {
    e.preventDefault()
    setIconEditor(!iconEditor)
  }

  function useOnClickOrEsc(ref, handler) {
    useEffect(() => {
      const listenerMousedown = (event) => {
        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          event.target.innerHTML === iconName
        ) {
          return
        }
        handler(event)
      }

      const listenerKeydown = (event) => {
        if (event.keyCode === 27) {
          handler(event)
        }
      }

      document.addEventListener('mousedown', listenerMousedown)
      document.addEventListener('keydown', listenerKeydown)

      return () => {
        document.removeEventListener('mousedown', listenerMousedown)
        document.removeEventListener('keydown', listenerKeydown)
      }
    }, [ref, handler])
  }

  useOnClickOrEsc(ref, () => close())

  return show ? (
    <div ref={ref} className='how-to-use-block'>
      <div className='container'>
        <h2>
          How to use it:
          <small className='float-right'>
            <i className='eos-icons eos-18' onClick={() => close()}>
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
            <a
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
              href={`https://gitlab.com/SUSE-UIUX/eos-icons/raw/master/animated-svg/${iconName}.svg?inline=false`}
            >
              <i className='eos-icons eos-18'>file_download</i> Download icon
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
              <Button
                primary
                type='button'
                onClick={() => {
                  document.getElementById('copy-code').select()
                  document.execCommand('copy')
                }}
              >
                <i className='eos-icons eos-18'>content_copy</i> Copy
              </Button>
              <a
                href={svgDownloadUrl}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button primary type='button'>
                  <i className='eos-icons eos-18'>file_download</i> Download SVG
                </Button>
              </a>
              <a
                href={pngDownloadUrl}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button primary type='button'>
                  <i className='eos-icons eos-18'>file_download</i> Download PNG
                </Button>
              </a>
              <Button primary type='button' onClick={iconEditorToggle}>
                <i className='eos-icons eos-18'>edit</i> Edit Icon
              </Button>
            </div>
            <strong>Tags:</strong>
            {iconTags.map((tag, key) => (
              <span key={key} className='badge'>
                <small>{tag}</small>
              </span>
            ))}
            {iconEditor ? (
              <IconEditor
                isActive={iconEditor}
                show={iconEditorToggle}
                iconNames={[iconName]}
              />
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </div>
  ) : (
    ''
  )
}

export default HowToPanel
