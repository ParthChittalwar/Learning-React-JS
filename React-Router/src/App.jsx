import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path ='/' element = {<h1>Home Page</h1>} />
        <Route path ='/About' element = {<About />} />  
        <Route path ='/Contact' element = {<Contact />} />
        <Route path ='/Product' element = {<Product />} />
      </Routes>
    </div>
  )
}

export default App
