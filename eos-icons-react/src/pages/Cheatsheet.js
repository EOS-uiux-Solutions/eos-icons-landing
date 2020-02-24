import React, { useContext, useReducer } from 'react';
import PageHeader from '../components/PageHeader'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'

const Cheatsheet = props => {
  const value = useContext(EosIconStore)
  const [state, dispatch] = useReducer(iconsReducer, value)
  console.log('state: ', state);

  return (
    <div>
      <PageHeader theme="purple">
        <h2>
          Cheatsheet: find the ligature of the icon you are looking for, plus, get an overview of all the available icons.
        </h2>
      </PageHeader>

      {/* ============ DEMO ============ */}
      <div style={{ margin: 20 }}>{value.singleIcon.map((ele, i) => {
        return <pre key={i}>Icon: {ele}</pre>
      })}

        <pre>Details: {state.icons.map(ele => {
          return ele.name === state.singleIcon[0] ? JSON.stringify(ele, null, 2) : ''
        })}</pre>

        <div style={{ display: 'flex', margin: 10, flexWrap: 'wrap' }}>
          {
            state.icons.map((ele, index) => {
              return (ele.name === 'installing' || ele.name === 'loading')
                ? ''
                : <i className="eos-icons" key={index} onClick={e => {
                  e.preventDefault()
                  return dispatch({ type: 'ADD_ICON', selection: e.target.outerText })
                }}>{ele.name}</i>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Cheatsheet;
