import React, { useContext } from 'react'
import { EosIconStore } from '../utils/EosIcons.store'
import selectIconContext from '../utils/selectIconContext'
import deSelectIconContext from '../utils/deSelectIconContext'

const Icon = props => {
  const { name, size, action } = props
  const value = useContext(EosIconStore)
  /* Possible icon sizes */
  const sizes = {
    18: 'md-18',
    24: 'md-24',
    32: 'md-32',
    48: 'md-48'
  }

  const [allSelect] = useContext(selectIconContext)

  const [allDeSelect] = useContext(deSelectIconContext)

  const isActive = () =>
    value.singleIcon[0] === name
      ? 'active'
      : value.multipleIcons.includes(name)
        ? 'active'
        : ''

  const iconClass = () => {
    const eosClass = 'eos-icons'
    const activeClass = allSelect ? `active` : allDeSelect ? `` : ` ${isActive()}`
    const sizeClass = sizes[size] ?? sizes.medium
    const finalClass = `${eosClass} ${activeClass} ${sizeClass}`

    return finalClass
  }


  return (
    <div className='icon-container'>
      <i
        className={iconClass()}
        onClick={action}
      >
        {name}
      </i>
      {name}
    </div >
  )
}

export default Icon
