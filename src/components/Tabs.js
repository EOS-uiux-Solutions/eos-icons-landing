import React, { useState, useEffect, useContext } from 'react'
import useWindow from '../hooks/useWidow'
import Toggle from './Toggle'
import AppContext from '../utils/AppContext'

const Tabs = (props) => {
  const { children, setTab, customize, showPanel } = props

  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const [position, setPosition] = useState(0)
  const [windowsSize] = useWindow()
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    setPosition(document.querySelector('.page-header').clientHeight + 54)
  }, [customize, showPanel, windowsSize])

  const toggleCustomize = (callback) => {
    return callback
  }
  return (
    <div className='tabs'>
      <ul className='tab-list' style={{ top: position }}>
        {children.map((child) => {
          const { label } = child.props

          return (
            <li
              className={
                activeTab === label
                  ? 'tab-list-item tab-list-active'
                  : 'tab-list-item'
              }
              key={label}
              onClick={() => setActiveTab(label) || (setTab && setTab(label))}
            >
              {label}
            </li>
          )
        })}
        {!windowsSize.isMobile ? (
          <div className='icons-control-toggle toggle'>
            <Toggle
              disabledStatus={activeTab === 'Animated Icons'}
              name='Select multiple'
              id='js-icon-picker'
              onClick={() =>
                toggleCustomize(dispatch({ type: 'TOGGLE_CUSTOMIZE' }))
              }
            />
          </div>
        ) : (
          ' '
        )}
      </ul>

      <div className='tab-content'>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </div>
  )
}

export default Tabs
