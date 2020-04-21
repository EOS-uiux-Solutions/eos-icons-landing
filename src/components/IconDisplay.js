import React from 'react'

const Icon = props => {
  const { name, size, action, active } = props
  /* Possible icon sizes */
  const sizes = {
    18: 'eos-18',
    24: 'eos-24',
    36: 'eos-36',
    48: 'eos-48'
  }

  const iconClass = () => {
    const eosClass = 'eos-icons'
    const activeClass = active ? 'active' : ''
    const sizeClass = sizes[size] ?? sizes.medium
    const finalClass = `${eosClass} ${activeClass} ${sizeClass}`

    return finalClass
  }

  return (
    <div className='icon-container'>
      <i className={iconClass()} onClick={action}>
        {name}
      </i>
      {name}
    </div>
  )
}

export default Icon
