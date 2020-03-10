import React, { useReducer, useContext } from 'react'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'
import Button from './Button'

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
        <div className='container'>
          <h2>
            How to use it:
            <small className='float-right'>
              <i onClick={handleClick} className='eos-icons md-18'>
                close
              </i>
            </small>
          </h2>
          <div className='input-group'>
            <input
              id='copy-code'
              className='input-group-element input-grow'
              readOnly='readOnly'
              value={`<i className='eos-icons'> ${state.singleIcon[0]} </i>`}
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
          <div className='how-to-use-row'>
            <b className='ml-3'>Tags:</b>
            <div className='tags'>
              {state.icons.map(icon => {
                return icon.name === state.singleIcon[0]
                  ? icon.tags.map((tag, key) => {
                    return (
                      <span key={key} className='badge'>
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
