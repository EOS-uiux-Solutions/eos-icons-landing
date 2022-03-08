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
        <a href='/'>
          <div className='brand'>
            <img className='logo' src={eosIcon} alt='eos-icons logo' />
          </div>
        </a>
        <nav className='padding-top-xs'>
          <NavLink to='/'>
            <i className='eos-icons'>miscellaneous</i>
            Icons
          </NavLink>
          <NavLink to='/about'>
            <i className='eos-icons'>face</i>
            About Us
          </NavLink>
          <NavLink to='/docs'>
            <i className='eos-icons'>description</i>
            Docs{' '}
          </NavLink>
          <NavLink to='/team'>
            <i className='eos-icons'>group</i>
            Team{' '}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
