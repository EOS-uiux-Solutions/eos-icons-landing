import React from 'react';
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'

function Home () {
  return (
    <>
      <PageHeader>
        Free. Open source. Vector and pixel-perfect icons. The iconic font your product needs.
      </PageHeader>
      <Button>
        default btn
      </Button>
      <Button primary>
        primary btn
      </Button>
    </>
  );
}

export default Home
