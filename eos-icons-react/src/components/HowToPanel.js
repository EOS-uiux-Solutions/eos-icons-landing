import React, { useReducer, useContext } from 'react'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'

const HowToPanel = props => {
  const { onClick } = props

  const value = useContext(EosIconStore)

  const [state, dispatch] = useReducer(iconsReducer, value)

  const handleClick = () => {
    onClick(false)
    return dispatch({ type: 'REMOVE_SINGLE_ICON' })
  }

  return (
    <>
      {
        <div className='how-to-use-container'>
          <h2 className='h2-how-to-use'>
            How to use it:
            <small className='right-pulled-small' id='close-code-snippet'>
              <i onClick={handleClick} className='eos-icons md-18'>
                close
              </i>
            </small>
          </h2>
          <div className='how-to-use-input-group'>
            <input
              className='how-to-use-curved-control'
              id='copy3'
              readOnly='readOnly'
              value={`<i className='eos-icons'> ${state.singleIcon[0]} </i>`}
            />
            <div className='how-to-use-input-group-append'>
              <button
                className='how-to-use-copy-button'
                id='copy1'
                type='button'
                onClick={() => {
                  document.getElementById('copy3').select()
                  document.execCommand('copy')
                }}
              >
                <i className='eos-icons md-18'>content_copy</i> Copy
              </button>
            </div>
          </div>
          <div className='how-to-use-row'>
            <b className='ml-3'>Tags:</b>
            <div className='tags'>
              {state.icons.map(icon => {
                return icon.name === state.singleIcon[0]
                  ? icon.tags.map((tag, key) => {
                      return (
                        <span key={key} className='how-to-use-badge'>
                          {' '}
                          {tag}{' '}
                        </span>
                      )
                    })
                  : ''
              })}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default HowToPanel
