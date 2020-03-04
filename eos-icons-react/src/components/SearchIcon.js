import React from 'react';

const SearchIcon = ({ onChange }) => {
  return (
    <input
      className="searchBar"
      type="text"
      name="search"
      placeholder="Search Icons..."
      onChange={event => onChange(event.target.value)}
    />
  );
};

export default SearchIcon;
