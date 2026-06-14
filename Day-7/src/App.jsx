import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Uidesign from './Pages/Product Page/Uidesign'
import Ecommerce from './Pages/Product Page/Ecommerce'
import Analytics from './Pages/Product Page/Analytics'
import Chat from './Pages/Product Page/Chat'
import Task from './Pages/Product Page/task'
import Music from './Pages/Product Page/Music'

const App = () => {
  return (
    <div>
     <Navbar />
     <Routes >
      <Route path ='/' element={<Home />}/>
      <Route path ='/about' element={<About />}/>
      <Route path ='/contact' element={<Contact />}/>
      <Route path ='/product' element={<Product />}/>
      <Route path ='/product/uidesign' element={<Uidesign />}/>
      <Route path ='/product/ecommerce' element={<Ecommerce />}/>
      <Route path ='/product/analytics' element={<Analytics />}/>
      <Route path ='/product/chat' element={<Chat />}/>
      <Route path ='/product/task' element={<Task />}/>
      <Route path ='/product/music' element={<Music />}/>
     </Routes>
    </div>
  )
}

export default App
