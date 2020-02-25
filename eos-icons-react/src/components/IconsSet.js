import React, { useContext, useReducer, useState } from 'react';
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'

const IconsSet = params => {
  const value = useContext(EosIconStore)

  const [state, dispatch] = useReducer(iconsReducer, value)
  /* Check if we're looking for icons information or customize */
  const [customize, setCustomize] = useState(false)
  console.log('state: ', state);


  return (
    <>
      Customize: <input type="checkbox" onClick={(e) => {
        customize ? setCustomize(false) : setCustomize(true)
      }} name="customize" id="customize" />

      {value.singleIcon.map((ele, i) => <pre key={i}><b>Icon</b>: {ele}</pre>)}

      <pre><b>Details</b>: {state.icons.map(ele => ele.name === state.singleIcon[0] ? JSON.stringify(ele, null, 2) : '')}</pre>

      <div style={{ display: 'flex', margin: 10, flexWrap: 'wrap' }}>
        {
          state.icons.map((ele, index) => {
            return (ele.name === 'installing' || ele.name === 'loading')
              ? ''
              : <i className={`eos-icons ${state.singleIcon[0] === ele.name ? 'active' : ''}`} key={index} onClick={e => {
                e.preventDefault()
                return customize ? dispatch({ type: 'ADD_ICONS', selection: e.target.outerText }) : dispatch({ type: 'ADD_ICON', selection: e.target.outerText })
              }}> {ele.name} </i>
          })
        }
      </div>
    </>
  )
}

export default IconsSet
