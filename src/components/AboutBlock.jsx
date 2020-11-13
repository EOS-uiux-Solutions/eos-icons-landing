import React from 'react'

export const AboutBlock = ({
  title,
  description,
  linkTo,
  linkTitle,
  image,
  reverse
}) => {
  return (
    <div
      className='about-block'
      style={{ flexDirection: reverse ? 'row-reverse' : '' }}
    >
      <div className='about-block-description'>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkTo}>{linkTitle}</a>
      </div>

      <div className='about-block-image'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default AboutBlock
