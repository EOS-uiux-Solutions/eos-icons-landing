import React from 'react'

const Contributor = props => {
  const { title, href, image, name } = props

  return (
    <a title={title} href={href} target='_blank'>
      <img className='contributors-img' src={image} />
      <p className='text-decoration-none text-dark'>{name}</p>
    </a>
  )
}

export default Contributor
