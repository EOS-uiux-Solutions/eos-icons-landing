import React from 'react';
import PageHeader from '../components/PageHeader'
import Link from '../components/Link'
import SUSEimg from '../assets/images/logos/suse.svg'
import Kubernetesimg from '../assets/images/logos/kubernetes.svg'
import openSUSEimg from '../assets/images/logos/opensuse.svg'
import OBSimg from '../assets/images/logos/obs.svg'
import CFimg from '../assets/images/logos/cloud_foundry.svg'

function Home () {
  return (
    <>
      <PageHeader size="medium" theme="orange">
        <h2>
          Free. Open source. Vector and pixel-perfect icons. The iconic font your product needs.
        </h2>
      </PageHeader>
      <div className='container'>
        <div className='flex flex-row'>
          <div className='flex-content'>
            <h3>Open source</h3>
            <p>Commercial, non-commercial, use them as you please. EOS icons coms with an MIT license, has an open source community, and welcomes your collaboration too.</p>
            <Link href='https://gitlab.com/SUSE-UIUX/eos-icons' name='View the git repository' external />
          </div>
          <div className='flex-content'>
            <h3>Pixel perfect</h3>
            <p>Professionaly designed following the state-of-the-art design specifications that created the same Material Design Icons.</p>
            <Link href='https://material.io/design/iconography/system-icons.html#grid-keyline-shapes' name='Creating system icons' external />
          </div>
          <div className='flex-content'>
            <h3>Hi-tech driven</h3>
            <p>Made to fit specific niches in software development such as: virtualization, cloud computing, software for infrastructure, etc.</p>
            <Link href='https://gitlab.com/SUSE-UIUX/eos-icons/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=' name='Request icons for your project' external />
          </div>
        </div>
      </div>
      <div className='gray-bg'>
        <div className='container'>
          <h2 className='text-center'>Handmade to fit top open source players</h2>
          <div className='flex flex-row'>
            <img className='brands' src={SUSEimg} alt="SUSE logo" />
            <img className='brands' src={Kubernetesimg} alt="Kubernetes logo" />
            <img className='brands' src={openSUSEimg} alt="openSUSE logo" />
            <img className='brands' src={OBSimg} alt="open build service logo" />
            <img className='brands' src={CFimg} alt="cloud foundry logo" />
          </div>
          <p className='text-center'>
            Your open source project needs icons?
            <Link href='https://slack.eosdesignsystem.com/' external name=' Get in touch with us!' />
          </p>
        </div>
      </div>
    </>
  );
}

export default Home
