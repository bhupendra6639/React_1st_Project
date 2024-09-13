import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './FormApplication/SignUp'
import LoginIn from './FormApplication/Login/Index'
import Home from './Pages/Home'
import LogOut from './Pages/LogOut'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-Here' element={<SignIn />} />
          <Route path='/LogIn' element={<LoginIn />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Home2' element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
