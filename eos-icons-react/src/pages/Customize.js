import React from 'react';
import PageHeader from '../components/PageHeader'

function Customize () {
  return (
    <PageHeader theme="purple">
      <h2>Click on Icons to select them</h2>
      <p>
        To continue building an old font, upload icons-config.json
        <button> file here </button>
      </p>
    </PageHeader>
  );
}

export default Customize;
