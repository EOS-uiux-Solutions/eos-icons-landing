import React from 'react'
import { Link } from '@reach/router'
import eosIcon from '../assets/images/logo.png'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : ''
      }
    }}
  />
)

const Navigation = () => {
  return (
    <header className='flex-wrap-sm'>
      <Link to='/'>
        <div className='brand'>
          <img className='logo' src={eosIcon} alt='' />
          <span className='brand-text'>Icons</span>
        </div>
      </Link>
      <nav className='padding-top-xs'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cheatsheet'>Cheatsheet </NavLink>
        <NavLink to='/docs'>Docs </NavLink>
      </nav>
    </header>
  )
}

export default Navigation
