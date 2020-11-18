import React from 'react'

const socialMediaImg = {
  twitter: require('../assets/images/social/twitter.svg'),
  linkedin: require('../assets/images/social/linkedin.svg'),
  git: require('../assets/images/social/git.svg'),
  dribbble: require('../assets/images/social/dribbble.svg'),
  behance: require('../assets/images/social/behance.svg'),
  medium: require('../assets/images/social/medium.svg')
}

export const TeamBlock = ({ image, role, name, description, social }) => {
  return (
    <div className='team-member' style={{ backgroundImage: `url(${image})` }}>
      <div className='team-member-overlay'>
        <div className='team-member-overlay-content'>
          <h4>{name}</h4>
          <p>{description}</p>

          <div className='team-member-social'>
            <ul>
              {social?.map((ele, i) => {
                return (
                  <li key={i}>
                    <a
                      href={ele.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={socialMediaImg[ele.title]} alt={ele.title} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <span>{role}</span>
    </div>
  )
}

export const ContributorsBlock = ({ image, name, role, social }) => {
  return (
    <div className='team-contributor'>
      <div className='team-contributor-description'>
        <span className='name'>{name}</span>
        <span className='role'>{role}</span>

        <ul>
          {social?.map((ele, i) => {
            return (
              <li key={i}>
                <a
                  href={ele.link}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                >
                  <img src={socialMediaImg[ele.title]} alt={ele.title} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className='team-contributor-image'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  )
}

export default TeamBlock
