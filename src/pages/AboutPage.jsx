import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import AboutBlock from '../components/AboutBlock'
import { UsedBy } from '../components/UsedBy'
import DownloadEOSicons from '../components/DownloadEOSicons'
import { Helmet } from 'react-helmet'
import scrollToTop from '../utils/scrollToTop'

export const AboutPage = () => {
  useEffect(() => {
    scrollToTop()
  })

  return (
    <>
      <Helmet>
        <title>About Us | EOS Icons</title>
        <meta
          name='description'
          content='Commercial, non-commercial, use them as you please. EOS icons comes with an MIT license, has an open source community, and welcomes your collaboration too.'
        />
        <meta
          name='keywords'
          content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
        />
      </Helmet>

      <PageHeader simple showHeaderIcon={false}>
        <h1>THE HI-TECH ICONS nobody thought about</h1>
        <p className='subheadline'>
          Open source, customisable, including all of Material icons.
        </p>

        <DownloadEOSicons />
      </PageHeader>
      <div className='container'>
        {data.map((ele, i) => {
          return <AboutBlock {...ele} key={i} />
        })}

        <UsedBy />
      </div>
    </>
  )
}

const data = [
  {
    title: 'Open Source',
    description:
      'Commercial, non-commercial, use them as you please. EOS icons comes with an MIT license, has an open source community, and welcomes your collaboration too.',
    linkTo: 'https://gitlab.com/SUSE-UIUX/eos-icons/',
    linkTitle: 'View the git repository ',
    image: require('../assets/images/pages/open-source.png'),
    reverse: false
  },
  {
    title: 'Hi-Tech Driven',
    description:
      'Made to fit specific niches in software development such as: virtualization, cloud computing, software for infrastructure, etc.',
    linkTo:
      'https://material.io/design/iconography/system-icons.html#grid-keyline-shapes',
    linkTitle: 'Creating system icons',
    image: require('../assets/images/pages/hi-tech.png'),
    reverse: true
  },
  {
    title: 'Pixel Perfect',
    description:
      'Professionally designed following the state-of-the-art design specifications that created the same Material Design Icons.',
    linkTo:
      'https://gitlab.com/SUSE-UIUX/eos-icons/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=',
    linkTitle: 'Request icons for your project',
    image: require('../assets/images/pages/pixel-perfect.png'),
    reverse: false
  }
]
export default AboutPage
