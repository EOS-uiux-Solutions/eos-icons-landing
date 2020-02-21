import React from 'react';
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'

function Customize () {
  return (
    <PageHeader theme="purple">
      <h2>Click on Icons to select them</h2>
      <p>
        To continue building an old font, upload icons-config.json
        <Button> file here </Button>
      </p>
    </PageHeader>
  );
}

export default Customize;
