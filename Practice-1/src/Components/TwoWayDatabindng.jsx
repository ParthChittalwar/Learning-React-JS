import React, { useState } from 'react'

const TwoWayDatabindng = () => {
  const [name, setName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ name, middleName, surname, email, password, number })
    setName('')
    setMiddleName('')
    setSurname('')
    setEmail('')
    setPassword('')
    setNumber('')
    console.log('First Name:', name)
    console.log('Middle Name:', middleName)
    console.log('Last Name:', surname)
    console.log('Email:', email)
    console.log('Number:', number)
    console.log('Form submitted')
  }

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h3 style={titleStyle}>Form Handling With Two Way Data Binding</h3>
          <p style={subtitleStyle}>Enter your details and submit the form to see two-way binding in action.</p>
        </div>
        <form onSubmit={submitHandler} style={formStyle}>
          <div style={fieldRow}>
            <label style={labelStyle}>First Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Enter Your Name'
              style={inputStyle}
            />
          </div>
          <div style={fieldRow}>
            <label style={labelStyle}>Middle Name</label>
            <input
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              type='text'
              placeholder='Enter Your Middle Name'
              style={inputStyle}
            />
          </div>
          <div style={fieldRow}>
            <label style={labelStyle}>Surname</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type='text'
              placeholder='Enter Your Surname'
              style={inputStyle}
            />
          </div>
          <div style={fieldRow}>
            <label style={labelStyle}>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Enter Your Email'
              style={inputStyle}
            />
          </div>
          <div style={fieldRow}>
            <label style={labelStyle}>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter Your Password'
              style={inputStyle}
            />
          </div>
          <div style={fieldRow}>
            <label style={labelStyle}>Phone Number</label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type='tel'
              placeholder='Enter Your Number'
              style={inputStyle}
            />
          </div>
          <button type='submit' style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  )
}

const wrapperStyle = {
  minHeight: '100vh',
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #eef2ff 0%, #f7fafc 100%)'
}

const cardStyle = {
  width: '100%',
  maxWidth: '560px',
  background: '#ffffff',
  borderRadius: '24px',
  boxShadow: '0 24px 80px rgba(55, 63, 104, 0.12)',
  padding: '32px',
  border: '1px solid rgba(15, 23, 42, 0.08)'
}

const headerStyle = {
  marginBottom: '24px',
  textAlign: 'center'
}

const titleStyle = {
  margin: '0 0 8px',
  fontSize: '26px',
  color: '#111827'
}

const subtitleStyle = {
  margin: 0,
  color: '#4b5563',
  lineHeight: 1.6,
  fontSize: '15px'
}

const formStyle = {
  display: 'grid',
  gap: '18px'
}

const fieldRow = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
}

const labelStyle = {
  fontSize: '14px',
  color: '#374151',
  fontWeight: 600
}

const inputStyle = {
  padding: '14px 16px',
  fontSize: '15px',
  borderRadius: '14px',
  border: '1px solid #d1d5db',
  background: '#f9fafb',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
}

const buttonStyle = {
  marginTop: '4px',
  padding: '14px 22px',
  borderRadius: '14px',
  border: 'none',
  backgroundColor: '#4f46e5',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 14px 24px rgba(79, 70, 229, 0.18)'
}

export default TwoWayDatabindng
