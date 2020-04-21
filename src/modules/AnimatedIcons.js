import React, { useState } from 'react'
import HowTo from '../components/HowToPanel'

const AnimatedIcons = props => {
  const { animatedIconsList } = props
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)

  const selectAndShowInfo = iconName => {
    setIconSelected(iconName)
    setShowPanel(true)
  }

  const closeHowTo = () => {
    setShowPanel(false)
    setIconSelected('')
  }

  return (
    <>
      {animatedIconsList.map((icon, index) => (
        <div className='icon-container' key={index}>
          <img
            src={require(`eos-icons/animated-svg/${icon}.svg`)}
            alt={icon}
            className={icon === iconSelected ? 'active' : ''}
            onClick={() => {
              selectAndShowInfo(icon)
            }}
          />
          {icon}
        </div>
      ))}
      <HowTo
        show={showPanel}
        iconName={iconSelected}
        iconTags=''
        type='animated'
        close={closeHowTo}
      />
    </>
  )
}

export default AnimatedIcons
