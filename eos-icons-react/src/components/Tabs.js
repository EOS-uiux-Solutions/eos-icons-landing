import React, { useState } from 'react'

const Tabs = props => {
  const { children } = props
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  return (
    <div className='tabs'>
      <ol className='tab-list'>
        {children.map(child => {
          const { label } = child.props
          return (
            <li
              className={
                activeTab === label
                  ? 'tab-list-item tab-list-active'
                  : 'tab-list-item'
              }
              key={label}
              onClick={() => setActiveTab(label)}
            >
              {label}
            </li>
          )
        })}
      </ol>

      <div className='tab-content'>
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </div>
  )
}

export default Tabs
