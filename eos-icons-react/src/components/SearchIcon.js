import React from 'react';

const SearchIcon = () => {
  const [search, setSearch] = React.useState('');
  console.log('search', search);

  return (
    <input
      className="searchBar"
      type="text"
      name="search"
      placeholder="Search Icons..."
      onChange={event => setSearch(event.target.value)}
    />
  );
};

export default SearchIcon;
