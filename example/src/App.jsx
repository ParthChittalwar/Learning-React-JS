import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name,setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert('Form Submitted')
    console.log(e.target[0].value)
    setName('')
  }
  return (
    <div>
      <form 
      onSubmit ={ (e) => {
        submitHandler(e)
      }
      }>
        <input
        value = {name}
        onChange = { (e) =>{
          setName(e.target.value)
        }}
        type = 'text' placeholder = 'Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
