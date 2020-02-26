import React, { useContext, useReducer } from 'react';
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'

/* Components */
import Icon from './IconDisplay'

const IconsSet = params => {
  const value = useContext(EosIconStore)

  const [state, dispatch] = useReducer(iconsReducer, value)
  console.log('APP STATE', state)

  const dispatchAction = e => {
    e.preventDefault()
    return dispatch({ type: state.customize ? 'ADD_ICONS' : 'ADD_ICON', selection: e.target.outerText })
  }

  /* Toggle customizable functionality */
  const toggleCustomize = e => dispatch({ type: 'TOGGLE_CUSTOMIZE' })

  return (
    <>
      <div className="icons-actions">
        Customize <input type="checkbox" onClick={toggleCustomize} name="customize" />

        <input className='search-box-demo' type="text" placeholder="Search ... " />
      </div>

      {/* ========== ONLY FOR DEMO ========== */}
      {!state.customize
        ? state.singleIcon.length
          ?
          <div className="icon-info-demo">
            {value.singleIcon.map((ele, i) => <pre key={i}><b>Name</b>: {ele}</pre>)}

            <pre>
              <b>Details</b>:
                {state.icons.map(ele => ele.name === state.singleIcon[0]
                ? JSON.stringify(ele, null, 2)
                : '')
              }
            </pre>
          </div>
          : ''
        : <pre>Icons selected: {state.multipleIcons.length}</pre>}
      {/* ========== END ONLY FOR DEMO ========== */}


      <div className="icons-list">
        {
          state.icons.map((ele, index) => {
            return (ele.name === 'installing' || ele.name === 'loading')
              ? ''
              : <Icon key={index} name={ele.name} action={dispatchAction} />
          })
        }
      </div>
    </>
  )
}

export default IconsSet
