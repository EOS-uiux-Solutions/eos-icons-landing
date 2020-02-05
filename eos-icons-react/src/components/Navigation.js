import React from 'react';
import { Link } from "@reach/router"

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : ''
      };
    }}
  />
);

const Navigation = params => {
  return (
    <header>
      <div className="brand">
        Icons
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cheatsheet">Cheatsheet </NavLink>
        <NavLink to="/customize">Customize </NavLink>
        <NavLink to="/docs">Docs </NavLink>
      </nav>
    </header>

  )
}

export default Navigation
