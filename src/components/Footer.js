import React from 'react'
import links from '../utils/Links.store'

const Footer = () => {
  return (
    <footer>
      <div className='container flex flex-wrap'>
        {links.map((ele, i) => {
          return <FooterBlock {...ele} key={i} />
        })}
      </div>
    </footer>
  )
}

const FooterBlock = ({ img, title, links }) => {
  return (
    <div className='footer-block'>
      <span>{img ? <img src={img} alt='EOS Logo footer' /> : title}</span>
      <div className='footer-block-list'>
        {links?.map((ele, index) => (
          <a
            key={index}
            href={ele.href}
            data-types-category={ele.category}
            data-types-label={ele.label}
            data-types-action={ele.action}
            rel='noopener noreferrer'
            target={ele.target}
          >
            {ele.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
