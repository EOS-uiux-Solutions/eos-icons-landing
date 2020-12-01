import React from 'react'

const Icon = (props) => {
  const { name, size, action, active } = props
  /* Possible icon sizes */
  const sizes = {
    18: 'eos-18',
    24: 'eos-24',
    36: 'eos-36',
    48: 'eos-48'
  }

  const iconClass = () => {
    const initialClass = 'icon-container'
    const activeClass = active ? 'active' : ''
    const finalClass = `${initialClass} ${activeClass}`

    return finalClass
  }

  return (
    <div className={iconClass()} onClick={action}>
      <i className={`eos-icons ${sizes[size]}`}>{name}</i>
      {name}
    </div>
  )
}

export default Icon
