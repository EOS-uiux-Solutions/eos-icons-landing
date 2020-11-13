import React from 'react'
import PageHeader from '../components/PageHeader'
import TeamBlock, { ContributorsBlock } from '../components/TeamBlock'

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
          {maintainersData.map((ele, i) => (
            <TeamBlock {...ele} key={i} />
          ))}
        </div>

        <div className='team-page-contributors'>
          <h4>
            The awesome people that contributed to the project, thanks for
            making it happen
          </h4>

          <div className='team-page-contributors-list'>
            {contributorsData.map((ele, i) => (
              <ContributorsBlock {...ele} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const maintainersData = [
  {
    name: 'Sorin Curescu',
    description: 'I do stuff with code like pew pew pew!',
    role: 'UX Developer',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: 'https://twitter.com/en3sis'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  },
  {
    name: 'Cynthia Sanchez',
    description: 'I do stuff with code like pew pew pew!',
    role: 'Product Owner',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: '#'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  },
  {
    name: 'Zvezdana Majanovic',
    description: 'I do stuff with code like pew pew pew!',
    role: 'Graphic Designer',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: '#'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  }
  // {
  //   name: 'Manuele Carlini',
  //   description: 'I do stuff with code like pew pew pew!',
  //   role: 'Product Owner',
  //   image: require('../assets/images/pages/team/sorin.png'),
  //   social: [
  //     {
  //       title: 'twitter',
  //       link: '#'
  //     },
  //     {
  //       title: 'linkedin',
  //       link: '#'
  //     },
  //     {
  //       title: 'git',
  //       link: '#'
  //     }
  //   ]
  // },
  // {
  //   name: 'Richa Bhist',
  //   description: 'I do stuff with code like pew pew pew!',
  //   role: 'Product Owner',
  //   image: require('../assets/images/pages/team/sorin.png'),
  //   social: [
  //     {
  //       title: 'twitter',
  //       link: '#'
  //     },
  //     {
  //       title: 'linkedin',
  //       link: '#'
  //     },
  //     {
  //       title: 'git',
  //       link: '#'
  //     }
  //   ]
  // },
  // {
  //   name: 'Jesus Herman',
  //   description: 'I do stuff with code like pew pew pew!',
  //   role: 'Product Owner',
  //   image: require('../assets/images/pages/team/sorin.png'),
  //   social: [
  //     {
  //       title: 'twitter',
  //       link: '#'
  //     },
  //     {
  //       title: 'linkedin',
  //       link: '#'
  //     },
  //     {
  //       title: 'git',
  //       link: '#'
  //     }
  //   ]
  // },
  // {
  //   name: 'Kenneth Wimmer',
  //   description: 'I do stuff with code like pew pew pew!',
  //   role: 'Product Owner',
  //   image: require('../assets/images/pages/team/sorin.png'),
  //   social: [
  //     {
  //       title: 'twitter',
  //       link: '#'
  //     },
  //     {
  //       title: 'linkedin',
  //       link: '#'
  //     },
  //     {
  //       title: 'git',
  //       link: '#'
  //     }
  //   ]
  // }
]

const contributorsData = [
  {
    name: 'Kateryna Marchak',
    role: 'Marketing',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: 'https://twitter.com/en3sis'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  },
  {
    name: 'Kateryna Marchak',
    role: 'Marketing',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: 'https://twitter.com/en3sis'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  },
  {
    name: 'Kateryna Marchak',
    role: 'Marketing',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: 'https://twitter.com/en3sis'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  },
  {
    name: 'Kateryna Marchak',
    role: 'Marketing',
    image: require('../assets/images/pages/team/sorin.png'),
    social: [
      {
        title: 'twitter',
        link: 'https://twitter.com/en3sis'
      },
      {
        title: 'linkedin',
        link: '#'
      },
      {
        title: 'git',
        link: '#'
      }
    ]
  }
]
export default TeamPage
