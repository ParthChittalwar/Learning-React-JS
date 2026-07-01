import React, { useState } from 'react'

const App = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const SubmitHandler = (e) => {
    e.preventDefault()
    alert('Form submitted!')
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)

    setName('')
    setEmail('')
    setPassword('')
  }

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f4f7ff',
    padding: '20px',
  }

  const formStyle = {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '420px',
    display: 'grid',
    gap: '16px',
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #d8dee8',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const buttonStyle = {
    padding: '14px 16px',
    borderRadius: '10px',
    border: 'none',
    background: '#4f46e5',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
  }

  return (
    <div style={containerStyle}>
      <form
        onSubmit={(e)=>{
          SubmitHandler(e)
        }}
      style={formStyle}>
        <h2 style={{ margin: 0, color: '#1f2937' }}>Create account</h2>
        <input
        value={name}
        onChange = { (e) =>{
          setName(e.target.value)
        }}
         type="text" placeholder="Enter your name" style={inputStyle} />
        <input
         value={email}
         onChange = { (e) =>{
          setEmail(e.target.value)
        }}
        type="email" placeholder="Enter your email" style={inputStyle} />
        <input 
         value={password}
         onChange = { (e) =>{
          setPassword(e.target.value)
        }}
        type="password" placeholder="Enter your password" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}

export default App
