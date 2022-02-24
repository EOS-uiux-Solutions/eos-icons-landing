import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import TeamBlock, { ContributorsBlock } from '../components/TeamBlock'
import { contributors, leads, creators } from '../utils/Contributors.store'
import Button from '../components/Button'
import { Helmet } from 'react-helmet'
import scrollToTop from '../utils/scrollToTop'

export const TeamPage = () => {
  useEffect(() => {
    scrollToTop()
  })

  return (
    <>
      <Helmet>
        <title>Meet the team | EOS Icons</title>
        <meta
          name='description'
          content='EOS icons is made and maintained by passioned skilled people that brings creativity and innovation into this world. Join us, become a contributor!'
        />
        <meta
          name='keywords'
          content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
        />
      </Helmet>
      <PageHeader simple>
        <h1>Meet the team</h1>
        <p className='subheadline'>
          EOS icons is made and maintained by a passionate and skilled team that
          brings creativity and innovation into this world.
        </p>
      </PageHeader>
      <div className='container team-page'>
        <div className='team-page-maintainers'>
          <div className='team-page-maintainers-introduction'>
            <h2>
              Community <br /> Leads
            </h2>
            <p>
              Mouse over the images <br /> to discover more about <br /> the
              people leading the open source community.
            </p>
          </div>
          {leads.map((ele, i) => (
            <TeamBlock {...ele} key={i} />
          ))}
        </div>

        <div className='team-page-contributors'>
          <h2>The creators and maintainers of the eos-icons npm package.</h2>
          <div className='team-page-contributors-list'>
            {creators.map((ele, i) => (
              <ContributorsBlock {...ele} key={i} />
            ))}
          </div>
        </div>
        <div className='team-page-contributors'>
          <h2>
            The amazing people that contributed to the wide array of projects.
            Thanks for making it happen.
          </h2>

          <div className='team-page-contributors-list'>
            {contributors.map((ele, i) => (
              <ContributorsBlock {...ele} key={i} />
            ))}
          </div>
        </div>

        <div className='team-page-cta'>
          <div className='slack-cta'>
            <h2>Join us, become a contributor!</h2>

            <p>
              Be part of the team, join our Slack channel, and chat with our
              incredible community. There are endless ways you can contribute,
              share ideas and insight, learn from others, and boost your career.
            </p>

            <Button
              onClick={() =>
                window.open('https://slack.eosdesignsystem.com/', '_blank')
              }
            >
              Join Slack
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
