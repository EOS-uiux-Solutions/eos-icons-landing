import React from 'react'
import PageHeader from '../components/PageHeader'
import DownloadEosIcons from '../components/DownloadEosIcons'

function Home () {
  return (
    <div>
      <PageHeader size='medium' theme='orange'>
        <h2>
          Free. Open source. Vector and pixel-perfect icons. The iconic font
          your product needs.
        </h2>
      </PageHeader>
      <DownloadEosIcons />
    </div>
  )
}

export default Home
