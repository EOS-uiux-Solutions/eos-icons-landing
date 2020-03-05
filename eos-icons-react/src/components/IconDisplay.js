import React, { useContext } from 'react'
import { EosIconStore } from '../utils/EosIcons.store'
import selectIconContext from '../utils/selectIconContext'
import deSelectIconContext from '../utils/deSelectIconContext'

const Icon = props => {
  const { name, size, color, action } = props
  const value = useContext(EosIconStore)
  /* Possible icon sizes */
  const sizes = {
    small: 16,
    normal: 18,
    medium: 32,
    large: 48
  }
  // eslint-disable-next-line
  const [allSelect, setAllSelect] = useContext(selectIconContext)
  // eslint-disable-next-line
  const [allDeSelect, setAllDeSelect] = useContext(deSelectIconContext)

  const isActive = () =>
    value.singleIcon[0] === name
      ? 'active'
      : value.multipleIcons.includes(name)
      ? 'active'
      : ''

  return (
    <div className='icon-container'>
      <i
        className={
          allSelect
            ? `eos-icons active`
            : allDeSelect
            ? `eos-icons`
            : `eos-icons ${isActive()}`
        }
        style={{
          color: color ?? 'black',
          fontSize: sizes[size] ?? sizes.normal
        }}
        onClick={action}
      >
        {name}
      </i>
      {name}
    </div>
  )
}

export default Icon
