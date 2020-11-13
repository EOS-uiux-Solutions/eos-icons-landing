import React from 'react'
import { Link } from '@reach/router'
import eosIcon from '../assets/images/eos-icons-logo.svg'

const NavLink = (props) => (
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
    <header className='flex-wrap-sm navigation'>
      <div className='container navigation-content'>
        <Link to='/'>
          <div className='brand'>
            <img className='logo' src={eosIcon} alt='' />
          </div>
        </Link>
        <nav className='padding-top-xs'>
          <NavLink to='/'>Icons </NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/docs'>Docs </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
