import React, { useState, useEffect } from 'react';
import AnimatedIconsList from '../utils/AnimatedIcons.store'
// import HowToPanel from './HowToPanel'


const AnimatedIcons = () => {
  const [iconSelected, setIconSelected] = useState('')

  const selectAndShowInfo = iconName => {
    setIconSelected(iconName)
  }

  return (
    (AnimatedIconsList.map((icon, index) =>
      <div className='icon-container' key={index}>
        <img
          src={require(`../../node_modules/eos-icons/animated-svg/${icon}.svg`)}
          alt={icon}
          className={icon === iconSelected ? 'active' : ''}
          onClick={selectAndShowInfo(icon)} />
        {icon}
      </div>
    ))
  )
}

export default AnimatedIcons
