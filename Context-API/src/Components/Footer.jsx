import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Footer = () => {

const user = useContext(DataContext)

  return (
    <div>
        <h1>Footer</h1>
        <p>City = {user.city}</p>
        <p>Work = {user.work}</p>
    </div>
  )
}

export default Footer
