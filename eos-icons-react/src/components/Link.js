import React from 'react'

const Link = props => {
  const { href, name } = props

  return (<a href={href}>{name}</a>)
}

export default Link
