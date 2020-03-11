import React, { useContext, useReducer, useEffect, useState } from 'react'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'
import selectIconContext from '../utils/selectIconContext'
import deSelectIconContext from '../utils/deSelectIconContext'

/* Components */
import Icon from './IconDisplay'
import Tabs from './Tabs'
import Toogle from './Toggle'
import SearchIcon from './SearchIcon'
import CustomizeIconsPanel from './CustomizeIconsPanel'
import HowToPanel from './HowToPanel'
import AnimatedIcons from './AnimatedIcons'

const IconsSet = props => {
  const value = useContext(EosIconStore)

  const [, setAllSelect] = useContext(selectIconContext)

  const [, setAllDeSelect] = useContext(deSelectIconContext)

  const [showPanel, setShowPanel] = useState(false)

  const [search, setSearch] = useState('')
  useEffect(() => {
    dispatch({ type: 'TOGGLE_SEARCH', search: search })
  }, [search])

  const [state, dispatch] = useReducer(iconsReducer, value)

  const dispatchAction = e => {
    e.preventDefault()
    setShowPanel(true)
    setAllSelect(false)
    setAllDeSelect(false)
    return dispatch({
      type: state.customize ? 'ADD_MULTIPLE_ICONS' : 'ADD_SINGLE_ICON',
      selection: e.target.textContent
    })
  }

  /* Toggle customizable functionality */
  const toggleCustomize = () => {
    props.action()
    return dispatch({ type: 'TOGGLE_CUSTOMIZE' })
  }

  return (
    <>
      <div className='toolbar'>
        <Toogle name='Icon picker' onClick={toggleCustomize} />
        <SearchIcon onChange={setSearch} />
      </div>
      <Tabs>
        <div label='Regular Icons'>
          {!state.customize ? (
            state.singleIcon.length ? (
              <div className='how-to-use-block'>
                {showPanel ? (
                  <HowToPanel state={state} onClick={setShowPanel} />
                ) : (
                    ''
                  )}
              </div>
            ) : (
                ''
              )
          ) : (
              <div className='how-to-use-block'>
                <CustomizeIconsPanel />
              </div>
            )}
          <div className='icons-list'>
            {state.icons.map((ele, index) => {
              // skip animated icons from the object
              return ele.name === 'installing' || ele.name === 'loading' ? (
                ''
              ) : (
                  <Icon size={32} key={index} name={ele.name} action={dispatchAction} />
                )
            })}
          </div>
        </div>
        <div label='Animated Icons'>
          <div className='icons-list'>
            <AnimatedIcons />
          </div>
        </div>
      </Tabs>
    </>
  )
}

export default IconsSet
