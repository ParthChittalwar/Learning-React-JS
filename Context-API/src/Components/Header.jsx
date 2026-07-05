import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Header = () => {

const data = useContext(DataContext)

  return (
    <div>
      <h1>Header</h1>
      <p>Name = {data.name}</p>
    </div>
  )
}

export default Header
