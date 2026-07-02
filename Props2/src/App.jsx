import React from 'react'
import Cards from './Components/Cards'

const App = () => {

  const user = [
  {
    "id": 1,
    "img": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "Aarav Sharma",
    "profession": "Software Engineer",
    "age": 24,
    "city": "Mumbai"
  },
  {
    "id": 2,
    "img": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Ananya Patel",
    "profession": "UI/UX Designer",
    "age": 26,
    "city": "Pune"
  },
  {
    "id": 3,
    "img": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Rohan Verma",
    "profession": "Data Analyst",
    "age": 28,
    "city": "Bengaluru"
  },
  {
    "id": 4,
    "img": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Sneha Iyer",
    "profession": "Marketing Manager",
    "age": 30,
    "city": "Hyderabad"
  },
  {
    "id": 5,
    "img": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "Kabir Mehta",
    "profession": "Frontend Developer",
    "age": 23,
    "city": "Delhi"
  }
]

  return (
    <div>
     {user.map((elem,idx) => {

      return <Cards key={idx} img = {elem.img} name = {elem.name} profession = {elem.profession} age = {elem.age} city = {elem.city} />
     })}
    </div>
  )
}

export default App
