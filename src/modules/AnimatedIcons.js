import React, { useState } from 'react'
import HowTo from '../components/HowToPanel'

const AnimatedIcons = (props) => {
  const { animatedIconsList } = props
  const [iconSelected, setIconSelected] = useState('')
  const [showPanel, setShowPanel] = useState(false)

  const selectAndShowInfo = (iconName) => {
    setIconSelected(iconName)
    setShowPanel(true)
  }

  const closeHowTo = () => {
    setShowPanel(false)
    setIconSelected('')
  }

  return <></>
}

export default AnimatedIcons
