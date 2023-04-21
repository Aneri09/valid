import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='row'>
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/about'><h1>About</h1></Link>
        <Link to='/contact'><h1>Contact</h1></Link>
        <Link to='/login'><h1>Log in</h1></Link>
        <Link to='/signin'><h1>Sign in</h1></Link>
    </div>
  )
}

export default Nav