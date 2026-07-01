import React from 'react'

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f7fb',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  },
  form: {
    background: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 6px 18px rgba(20,30,50,0.08)',
    width: '100%',
    maxWidth: '420px',
    display: 'grid',
    gap: '12px'
  },
  input: {
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #dbe3ef',
    outline: 'none',
    fontSize: '14px'
  },
  button: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: 'none',
    background: '#376ef6',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer'
  }
}

const App = () => {

  const submitHnadler = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    console.log(e.target[3].value)
    console.log(e.target[4].value)

  }

  return (
    <div style={styles.page}>
      <form 
      onSubmit ={(e)=>{
        submitHnadler(e)
      }}
      style={styles.form}>
        <input style={styles.input} type="text" placeholder="Enter your name" />
        <input style={styles.input} type="email" placeholder="Enter your email" />
        <input style={styles.input} type="password" placeholder="Enter your password" />
        <input style={styles.input} type="text" placeholder="Enter your username" />
        <input style={styles.input} type="number" placeholder="Enter your age" />
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App

