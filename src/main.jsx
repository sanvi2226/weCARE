import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
//import BlogOne from './Components/Blogs/BlogOne.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />  
      <Route path='about' element={<About />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='contactus' element={<ContactUs />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
