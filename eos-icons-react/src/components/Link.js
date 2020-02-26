import React from 'react'

const Link = props => {
  const { href, name, category, action, label } = props

  return (<a href={href} data-event-category={category} data-event-label={label} data-event-action={action} >{name}</a>)
}

export default Link
