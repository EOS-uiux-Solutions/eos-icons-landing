import React from 'react';
import PageHeader from '../components/PageHeader'
import IconsSet from '../components/IconsSet'

const Cheatsheet = props => {
  return (
    <div>
      <PageHeader theme="purple">
        <h2>
          Cheatsheet: find the ligature of the icon you are looking for, plus, get an overview of all the available icons.
        </h2>
      </PageHeader>

      <IconsSet />
    </div>
  );
}

export default Cheatsheet;
