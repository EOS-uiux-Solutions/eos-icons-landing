import React from 'react'

const Icon = (props) => {
  const { name, size, action, type, active, iconsTheme } = props
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

  return type === 'static' ? (
    <div className={iconClass()} onClick={action}>
      <i
        className={`eos-icons${iconsTheme === 'outlined' ? '-outlined' : ' '} ${
          sizes[size]
        }`}
      >
        {name}
      </i>
      {name}
    </div>
  ) : (
    <div className={iconClass()} onClick={action}>
      <img src={require(`eos-icons/animated-svg/${name}.svg`)} alt={name} />
      {name}
    </div>
  )
}

export default Icon
