import React from 'react'

const Formhandling = () => {

const submitHandler = (e) => {
    e.preventDefault();
    console.log('First Name:', e.target[0].value);
    console.log('Middle Name:', e.target[1].value);
    console.log('Last Name:', e.target[2].value);
    console.log('Email:', e.target[3].value);
    console.log('Number:', e.target[4].value);
    console.log('Form submitted');
}

  const inputStyle = { 
    padding: '12px', 
    fontSize: '16px', 
    border: '2px solid #e0e0e0', 
    borderRadius: '6px', 
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none'
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#4CAF50',
    boxShadow: '0 0 8px rgba(76, 175, 80, 0.3)'
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
    marginTop: '10px'
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ color: '#333', textAlign: 'center', marginBottom: '30px', fontSize: '24px', fontWeight: '600' }}>Form Handling Without Two Way Data Binding</h3>
      <form
      onSubmit = { (e) => {
        submitHandler(e);
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type='text' placeholder="First Name" style={inputStyle} onFocus={(e) => e.target.style.borderColor = '#4CAF50'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
        <input type='text' placeholder="Middle Name" style={inputStyle} onFocus={(e) => e.target.style.borderColor = '#4CAF50'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
        <input type='text' placeholder="Last Name" style={inputStyle} onFocus={(e) => e.target.style.borderColor = '#4CAF50'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
        <input type='email' placeholder="Email" style={inputStyle} onFocus={(e) => e.target.style.borderColor = '#4CAF50'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
        <input type='tel' placeholder="Phone Number" style={inputStyle} onFocus={(e) => e.target.style.borderColor = '#4CAF50'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
        <button style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'} onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}>Submit</button>
      </form>
    </div>
  )
}

export default Formhandling
