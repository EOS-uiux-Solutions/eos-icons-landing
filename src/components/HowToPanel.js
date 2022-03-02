import React, { useState, useEffect, useContext, useRef } from 'react'
import AppContext from '../utils/AppContext'
import Button from './Button'
import IconEditor from './IconEditor'
import copyToClipboard from '../utils/copyToClipboard'

const HowToPanel = (props) => {
  const { show, close, iconName, type, iconTags } = props
  const ref = useRef()
  const [iconEditor, setIconEditor] = useState(false)
  const [iconType, setIconType] = useState('static')
  const iconEditorToggle = (type) => {
    setIconType(type)
    setIconEditor(!iconEditor)
  }

  const { state, dispatch } = useContext(AppContext)
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

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const urlIconName = urlParams.get('iconName')
  const urlTagName = urlParams.get('tagName')

  let setSearchWithUrlParam = urlIconName && !iconName ? urlIconName : ''

  if (setSearchWithUrlParam === '') {
    setSearchWithUrlParam = urlTagName
  }

  const selectTag = (urlTagName, callback) => {
    window.history.replaceState(
      '',
      'EOS Icons',
      `${window.location.pathname}?tagName=${urlTagName}`
    )
    return callback
  }
  const setTagInSearch = () => {
    return dispatch({
      type: 'TOGGLE_SEARCH_REGULAR_ICONS',
      search: urlTagName
    })
  }

  useEffect(() => {
    if (urlTagName != null) {
      setTagInSearch()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlTagName])

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
                  onClick={() => copyToClipboard('copy-code')}
                >
                  <i className='eos-icons eos-18'>content_copy</i>
                </Button>
              </div>
              <Button
                primary
                type='button'
                onClick={() => iconEditorToggle('animated')}
              >
                <i className='eos-icons eos-18'>edit</i> Edit & Download Icon
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
                  value={
                    state.iconsTheme === 'filled'
                      ? `<i class='eos-icons'>${iconName}</i>`
                      : `<i class='eos-icons-outlined'>${iconName}</i>`
                  }
                />
                <Button
                  type='button'
                  onClick={() => copyToClipboard('copy-code')}
                >
                  <i className='eos-icons eos-18'>content_copy</i>
                </Button>
              </div>
              <Button
                primary
                type='button'
                onClick={() => iconEditorToggle('static')}
              >
                <i className='eos-icons eos-18'>edit</i> Edit & Download Icon
              </Button>
            </div>
            <div>
              <strong>Tags:</strong>
              {iconTags?.map((tag, key) => (
                <span
                  key={key}
                  className='badge'
                  onClick={() => {
                    selectTag(
                      tag,
                      dispatch({
                        type: 'TOGGLE_ICON_TAGS',
                        selection: tag
                      })
                    )
                  }}
                  style={{ cursor: 'pointer' }}
                >
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
            theme={state.iconsTheme}
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
