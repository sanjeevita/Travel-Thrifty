import { useState } from 'react'
import Login from './Login'
import './App.css'
import LandingPage from './LandingPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Signup from './Signup'
import { Home } from './Home'

function App() {

  return (
   <>
   <Routes>
   <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Layout><Login/></Layout>}/>
      <Route path='/signup' element={<Layout><Signup/></Layout>}/>
      <Route path='/home' element={<Home/>}/>
   </Routes>
   </>
  )
}

export default App
