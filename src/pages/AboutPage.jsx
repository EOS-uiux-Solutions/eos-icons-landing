import React from 'react'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import AboutBlock from '../components/AboutBlock'

export const AboutPage = () => {
  return (
    <>
      <PageHeader simple>
        <h1>THE HI-TECH ICONS nobody thought about</h1>
        <p>Open source, customisable, including all of Material icons.</p>

        <Button>Downlod EOS Icons</Button>
      </PageHeader>
      <div className='container'>
        {data.map((ele, i) => {
          return <AboutBlock {...ele} key={i} />
        })}
      </div>
    </>
  )
}

const data = [
  {
    title: 'Open Source',
    description:
      'Commercial, non-commercial, use them as you please. EOS icons comes with an MIT license, has an open source community, and welcomes your collaboration too.',
    linkTo: '#',
    linkTitle: 'View the git repository ',
    image: require('../assets/images/pages/open-source.png'),
    reverse: false
  },
  {
    title: 'Hi-Tech Driven',
    description:
      'Made to fit specific niches in software development such as: virtualization, cloud computing, software for infrastructure, etc.',
    linkTo: '#',
    linkTitle: 'Creating system icons',
    image: require('../assets/images/pages/hi-tech.png'),
    reverse: true
  },
  {
    title: 'Pixel Perfect',
    description:
      'Professionally designed following the state-of-the-art design specifications that created the same Material Design Icons.',
    linkTo: '#',
    linkTitle: 'Request icons for your project',
    image: require('../assets/images/pages/pixel-perfect.png'),
    reverse: false
  }
]
export default AboutPage
