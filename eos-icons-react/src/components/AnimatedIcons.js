import React, { useState } from 'react';
import AnimatedIconsList from '../utils/AnimatedIcons.store'
import HowTo from '../components/HowToNew'

const AnimatedIcons = () => {
  const [iconSelected, setIconSelected] = useState('')

  const selectAndShowInfo = iconName => {
    setIconSelected(iconName)
  }

  return (
    <>
      {
        (AnimatedIconsList.map((icon, index) =>
          <div className='icon-container' key={index}>
            <img
              src={require(`../../node_modules/eos-icons/animated-svg/${icon}.svg`)}
              alt={icon}
              className={icon === iconSelected ? 'active' : ''}
              onClick={() => {
                selectAndShowInfo(icon)
              }}
            />
            {icon}
          </div>
        ))
      }
      < HowTo show={false} type='static' />
    </>
  )
}

export default AnimatedIcons
