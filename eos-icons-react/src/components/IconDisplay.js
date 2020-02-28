import React, { useContext, useReducer } from 'react'
import { EosIconStore, iconsReducer } from '../utils/EosIcons.store'
const Icon = props => {
  const { name, size, color, action } = props
  const value = useContext(EosIconStore)
  const [state, dispatch] = useReducer(iconsReducer, value)
  /* Possible icon sizes */
  const sizes = {
    small: 16,
    normal: 18,
    medium: 32,
    large: 48
  }
  console.log(state.selectAll)
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
          state.selectAll
            ? 'eos-icons active'
            : state.deselectAll
            ? 'eos-icons'
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
