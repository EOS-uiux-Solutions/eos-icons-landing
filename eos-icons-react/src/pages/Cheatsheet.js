import React from 'react';
import PageHeader from '../components/PageHeader'
import SearchIcon from '../components/SearchIcon'

const Cheatsheet = () => {
  return (
    <div>
    <PageHeader theme="purple">
      <h2>
        Cheatsheet: find the ligature of the icon you are looking for, plus, get an overview of all the available icons.
      </h2>
    </PageHeader>
    <SearchIcon />
    </div>
  
  );
}

export default Cheatsheet;
