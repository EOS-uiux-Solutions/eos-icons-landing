import React from 'react'
import PageHeader from '../components/PageHeader'
import TeamBlock, { ContributorsBlock } from '../components/TeamBlock'
import { contributors, maintainers } from '../utils/Contributors.store'
import Button from '../components/Button'

export const TeamPage = () => {
  return (
    <>
      <PageHeader simple>
        <h1>Meet the team</h1>
        <p>
          EOS icons is made and maintained by passioned skilled people that
          brings creativity and innovation into this world.
        </p>
      </PageHeader>
      <div className='container team-page'>
        <div className='team-page-maintainers'>
          <div className='team-page-maintainers-introduction'>
            <h2>
              Offical
              <br />
              Maintainers
            </h2>
            <p>
              Mouse over the images <br /> to discover more
            </p>
          </div>
          {maintainers.map((ele, i) => (
            <TeamBlock {...ele} key={i} />
          ))}
        </div>

        <div className='team-page-contributors'>
          <h2>
            The awesome people that contributed to the project, thanks for
            making it happen
          </h2>

          <div className='team-page-contributors-list'>
            {contributors.map((ele, i) => (
              <ContributorsBlock {...ele} key={i} />
            ))}
          </div>
        </div>

        <div className='team-page-cta'>
          <div className='slack-cta'>
            <h4>Join us, become a contributor!</h4>

            <p>
              Be part of the team, enter our Slack channel and chat directly
              with developers and designer. We’ll tell you how you can contrite,
              you can share ideas and insight, learn and boost your career.
            </p>

            <Button>Join Slack</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
