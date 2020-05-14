import React from 'react'
import PageHeader from '../components/PageHeader'
import Contributor from '../components/Contributor'
import DownloadEosIcons from '../components/DownloadEosIcons'
import SUSEimg from '../assets/images/logos/suse.svg'
import Kubernetesimg from '../assets/images/logos/kubernetes.svg'
import openSUSEimg from '../assets/images/logos/opensuse.svg'
import OBSimg from '../assets/images/logos/obs.svg'
import CFimg from '../assets/images/logos/cloud_foundry.svg'
import uyuni from '../assets/images/logos/uyuni.svg'
import contributors from '../utils/Contributors.store'

const Home = () => {
  return (
    <>
      <PageHeader size='medium' theme='orange'>
        <h1>
          Free. Open source. Vector and pixel-perfect icons. The iconic font
          your product needs.
        </h1>
      </PageHeader>
      <div className='container flex col-md'>
        <div className='flex-content'>
          <h3>Open source</h3>
          <p>
            Commercial, non-commercial, use them as you please. EOS icons comes
            with an MIT license, has an open source community, and welcomes your
            collaboration too.
          </p>
          <a
            href='https://gitlab.com/SUSE-UIUX/eos-icons'
            target='_blank'
            rel='noopener noreferrer'
          >
            View the git repository
          </a>
        </div>
        <div className='flex-content'>
          <h3>Pixel perfect</h3>
          <p>
            Professionally designed following the state-of-the-art design
            specifications that created the same Material Design Icons.
          </p>
          <a
            href='https://material.io/design/iconography/system-icons.html#grid-keyline-shapes'
            target='_blank'
            rel='noopener noreferrer'
          >
            Creating system icons
          </a>
        </div>
        <div className='flex-content'>
          <h3>Hi-tech driven</h3>
          <p>
            Made to fit specific niches in software development such as:
            virtualization, cloud computing, software for infrastructure, etc.
          </p>
          <a
            href='https://gitlab.com/SUSE-UIUX/eos-icons/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D='
            target='_blank'
            rel='noopener noreferrer'
          >
            Request icons for your project
          </a>
        </div>
      </div>
      <div className='gray-bg'>
        <div className='container'>
          <h2 className='text-center'>
            Handmade to fit top open source players
          </h2>
          <div className='flex flex-wrap'>
            <img className='brands' src={SUSEimg} alt='SUSE logo' />
            <img className='brands' src={Kubernetesimg} alt='Kubernetes logo' />
            <img className='brands' src={uyuni} alt='Uyuni project' />
            <img className='brands' src={openSUSEimg} alt='openSUSE logo' />
            <img
              className='brands'
              src={OBSimg}
              alt='open build service logo'
            />
            <img className='brands' src={CFimg} alt='cloud foundry logo' />
          </div>
          <p className='text-center'>
            Your open source project needs icons?
            <a
              href='https://slack.eosdesignsystem.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              Get in touch with us!
            </a>
          </p>
        </div>
        <DownloadEosIcons />
      </div>
      <div className='container'>
        <h2 className='text-center'>
          Special thanks to all the superheroes that made it happen
        </h2>
        <div className='flex flex-wrap text-center padding-top-md'>
          {contributors.map((ele, i) => (
            <Contributor key={i} {...ele} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
