import React from 'react'
import Formhandling from './Components/Formhandling'
import TwoWayDatabindng from './Components/TwoWayDatabindng'
import ApiCalling from './Components/ApiCalling'
import { Routes, Route, Form } from 'react-router-dom'
import ReactRouter from './Components/ReactRouter'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ReactRouter />} />
        <Route path='/form-handling' element={<Formhandling />} />
        <Route path='/two-way-binding' element={<TwoWayDatabindng />} />
        <Route path='/api-calling' element={<ApiCalling />} />
      </Routes>
      
    </div>
  )
}

export default App
