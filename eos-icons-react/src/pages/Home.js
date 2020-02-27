import React from 'react'
import PageHeader from '../components/PageHeader'
import Contributor from '../components/Contributor'

const contributors = [
  {
    title: 'Cynthia Sanchez on twitter',
    href: 'https://twitter.com/cyntss',
    image: '',
    name: 'Cynthia Sanchez'
  },
  {
    title: 'Zvezdana Marjanovic on Linked-In',
    href: 'https://www.linkedin.com/in/zvezdanam',
    image: '',
    name: 'Zvezdana Marjanovic'
  },
  {
    title: 'Manuele Carlini on twitter',
    href: 'https://twitter.com/manuelecarlini',
    image: '',
    name: 'Manuele Carlini'
  },
  {
    title: 'Richa Bhist on Linked-In',
    href: 'https://www.linkedin.com/in/richabisht/',
    image: '',
    name: 'Richa Bhist'
  },
  {
    title: 'Jesus Herman on twitter',
    href: 'https://twitter.com/hesusjerman',
    image: '',
    name: 'Jesus Herman'
  },
  {
    title: 'Sorin Curescu on twitter',
    href: 'https://twitter.com/en3sis',
    image: '',
    name: 'Sorin Curescu'
  },
  {
    title: 'Abhinandan Sharma on Linked-In',
    href: 'https://www.linkedin.com/in/abhinandan-sharma-672299150/',
    image: '',
    name: 'Abhinandan Sharma'
  },
  {
    title: 'Kartikay Bhutani on twitter',
    href: 'https://twitter.com/kbhutani0001',
    image: '',
    name: 'Kartikay Bhutani'
  },
  {
    title: 'Carla Moratillo on Dribbble',
    href: 'https://dribbble.com/Carla_Isela',
    image: '',
    name: 'Carla Moratillo'
  },
  {
    title: 'Saurabh Sharma on Twitter',
    href: 'https://twitter.com/SAURABH20944279?s=09',
    image: '',
    name: 'Saurabh Sharma'
  },
  {
    title: 'Kateryna Marchak on Twitter',
    href: 'https://twitter.com/ZenZippy',
    image: '',
    name: 'Kateryna Marchak'
  }
]

function Home () {
  return (
    <div>
      <PageHeader size='medium' theme='orange'>
        <h2>
          Free. Open source. Vector and pixel-perfect icons. The iconic font
          your product needs.
        </h2>
      </PageHeader>
      <div className='container padding-vertical-lg'>
        <h3 className='text-center'>
          Special thanks to all the superheroes that made it happen
        </h3>
        <div className='contributors text-center padding-top-md'>
          {contributors.map(ele => (
            <Contributor {...ele} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
