import React from 'react'
import Nav from './Nav'

function Signin() {
  return (
    <div>
        <Nav/>
        <div className="box">
            <h1>Sign in </h1>
            <input type="text" placeholder='Enter your name'/><br/>
                        <input type="number" placeholder='Enter your Number'/><br/>
                        <input type="email" placeholder='Enter your Email'/><br/>
                        <input type="password" placeholder='Enter your Passwor'/><br/>
                       <input type="submit" className='button'/>
        </div>
    </div>
  )
}

export default Signin