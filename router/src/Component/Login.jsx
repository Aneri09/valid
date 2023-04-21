import React from 'react'
import Nav from './Nav'

function Login() {
  return (
    <div>
        <Nav/>
        <div className="box">
            <h1>Log in </h1>
            
                       
                        <input type="email" placeholder='Enter your Email'/><br/>
                        <input type="password" placeholder='Enter your Passwor'/><br/>
                       <input type="submit" className='button'/>
        </div>
    </div>
  )
}

export default Login