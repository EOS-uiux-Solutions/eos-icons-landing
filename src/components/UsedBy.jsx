import React from 'react'

export const UsedBy = () => {
  return (
    <div className='used-by'>
      <span>Handmade to fit top open source players</span>
      <ul>
        {data.map((ele, i) => {
          return (
            <li key={i}>
              <a href={ele.url} target='_blank' rel='noopener noreferrer'>
                <img src={ele.image} alt={ele.name} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const data = [
  {
    name: 'kubernetes',
    url: 'https://kubernetes.io/',
    image: require('../assets/images/logos/kubernetes.svg')
  },
  {
    name: 'suse',
    url: 'https://www.suse.com/',
    image: require('../assets/images/logos/suse.svg')
  },
  {
    name: 'uyuni',
    url: 'https://www.uyuni-project.org/',
    image: require('../assets/images/logos/uyuni.svg')
  },
  {
    name: 'openSUSE',
    url: 'https://www.opensuse.org/',
    image: require('../assets/images/logos/opensuse.svg')
  },
  {
    name: 'Open Build Service',
    url: 'https://openbuildservice.org/',
    image: require('../assets/images/logos/obs.svg')
  },
  {
    name: 'Stratos',
    url: 'https://stratos.app/',
    image: require('../assets/images/logos/stratos.png')
  }
]
