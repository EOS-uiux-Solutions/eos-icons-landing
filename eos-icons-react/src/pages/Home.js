import React from 'react';
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'

function Home () {
  return (
    <>
      <PageHeader size="medium" theme="orange">
        <h2>
          Free. Open source. Vector and pixel-perfect icons. The iconic font your product needs.
        </h2>
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
