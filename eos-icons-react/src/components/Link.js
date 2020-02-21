import React from 'react'

const Link = props => {
  const { href, name, external, button } = props
  const target = external ? '_blank' : '_self'
  const btnClass = button ? button === 'primary' ? 'btn btn-primary' : 'btn btn-default' : ''
  return (<a href={href} target={target} className={btnClass}>{name}</a>)
}

export default Link
