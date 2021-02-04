import React, { useState, useEffect } from 'react'
import useWindow from '../hooks/useWidow'

const Tabs = (props) => {
  const { children, setTab, customize, showPanel } = props

  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const [position, setPosition] = useState(0)
  const [windowsSize] = useWindow()

  useEffect(() => {
    setPosition(document.querySelector('.page-header').clientHeight + 54)
  }, [customize, showPanel, windowsSize])

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
