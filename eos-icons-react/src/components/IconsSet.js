import React, { useContext, useReducer, useEffect } from 'react'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'
import selectIconContext from '../utils/selectIconContext'
import deSelectIconContext from '../utils/deSelectIconContext'

/* Components */
import Icon from './IconDisplay'
import Tabs from './Tabs'
import SearchIcon from './SearchIcon'
import CustomizeIconsPanel from './CustomizeIconsPanel'
import HowToPanel from './HowToPanel';

const IconsSet = () => {
  const value = useContext(EosIconStore)
  // eslint-disable-next-line
  const [allSelect, setAllSelect] = useContext(selectIconContext)
  // eslint-disable-next-line
  const [allDeSelect, setAllDeSelect] = useContext(deSelectIconContext)

  const [search, setSearch] = React.useState('')
  useEffect(() => {
    dispatch({ type: 'TOGGLE_SEARCH', search: search })
  }, [search])

  const [state, dispatch] = useReducer(iconsReducer, value)
  console.log('APP STATE', state)

  const dispatchAction = e => {
    e.preventDefault()
    setAllSelect(false)
    setAllDeSelect(false)
    return dispatch({
      type: state.customize ? 'ADD_MULTIPLE_ICONS' : 'ADD_SINGLE_ICON',
      selection: e.target.textContent
    })
  }

  /* Toggle customizable functionality */
  const toggleCustomize = () => dispatch({ type: 'TOGGLE_CUSTOMIZE' })
  return (
    <>
      <div className='icons-actions'>
        Customize
        <input type='checkbox' onClick={toggleCustomize} name='customize' />
        <SearchIcon onChange={setSearch} />
      </div>
      <Tabs>
        <div label='Regular Icons'>
          {!state.customize
            ? state.singleIcon.length
              ? (
              <div className="how-to-use-block">
                <HowToPanel state={state}></HowToPanel>
              </div>
            ) : (
              ''
            )
           : (
            <div className='icon-info-demo'>
              <CustomizeIconsPanel />
            </div>
           )
          }
          <div className="icons-list">
            {
              state.icons.map((ele, index) => {
                return (ele.name === 'installing' || ele.name === 'loading')
                  ? ''
                  : <Icon key={index} name={ele.name} action={dispatchAction} />
              })
            }
          </div>
        </div>
        <div label='Animated Icons'>These are animated icons.</div>
      </Tabs>
    </>
  )
}

export default IconsSet
