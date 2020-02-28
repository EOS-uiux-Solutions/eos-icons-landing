import React from 'react'


const Link = ({ href, name, external, button, category, action, label }) => {
  const target = external ? '_blank' : '_self';
  const btnClass = button ? button === 'primary' ? 'btn btn-primary' : 'btn btn-default' : '';

  return (<a href={href} data-event-category={category} data-event-label={label} data-event-action={action} target={target} className={btnClass} >{name}</a>);
}

export default Link
