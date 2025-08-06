import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//import './App.css'

function App() {
  

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default App
