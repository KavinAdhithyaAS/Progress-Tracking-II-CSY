import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signin from './Navigate/Signin'
import Login from './Navigate/Login'
import Home from './Navigate/Home'
import Contact from'./Navigate/Contact'
import Word from './Navigate/Word'
import Eee from './Navigate/Eee'
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Word' element={<Word/>}/>
    <Route path='/Eee' element={<Eee/>}/>
    </Routes>
    </>
  )
}

export default App