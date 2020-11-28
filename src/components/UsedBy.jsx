import React from 'react'

export const UsedBy = () => {
  return (
    <div className='used-by'>
      <span>Handmade to fit top open source players</span>
      <ul>
        {data.map((ele, i) => {
          return (
            <li key={i}>
              <img src={ele.image} alt={ele.title} />
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
    url: '',
    image: require('../assets/images/logos/kubernetes.svg')
  },
  {
    name: 'suse',
    url: '',
    image: require('../assets/images/logos/suse.svg')
  },
  {
    name: 'uyuni',
    url: '',
    image: require('../assets/images/logos/uyuni.svg')
  },
  {
    name: 'openSUSE',
    url: '',
    image: require('../assets/images/logos/opensuse.svg')
  },
  {
    name: 'Open Build Service',
    url: '',
    image: require('../assets/images/logos/obs.svg')
  },
  {
    name: 'Stratos',
    url: '',
    image: require('../assets/images/logos/stratos.png')
  }
]
