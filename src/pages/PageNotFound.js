import React from 'react'
import { Link } from '@reach/router'
import Button from '../components/Button'

const PageNotFound = () => {
  return (
    <div className='heading-not-found'>
      <h1>404</h1>
      <br />
      <h1>Oops! Something went wrong.</h1>
      <br />
      <Link to='/'>
        <Button>Return To Home</Button>
      </Link>
    </div>
  )
}

export default PageNotFound
