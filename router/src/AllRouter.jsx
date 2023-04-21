import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'
import Login from './Component/Login'
import Signin from './Component/Signin'
import Error from './Component/Error'

function AllRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
          
           <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default AllRouter