import React from 'react'
import Cards from './Components/Cards.jsx'

const App = () => {

  const name = "Parth Chittalwar";
  const age = 21;
  const Profession = "Web Developer";
  const phone = 1234567890;

  return (
    <div>
      <Cards
      name = {name}
      age = {age}
      profession = {Profession}
      phone = {phone} 
      />
    </div>
  )
}

export default App
