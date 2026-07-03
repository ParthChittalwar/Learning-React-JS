import React from 'react'
import axios from 'axios'


const App = () => {

  const [data, setData] = React.useState([])

  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data)
    
  }
  return (
    <div className="app">
      <header className="header">
        <h1>Picture Gallery</h1>
        <button className="fetch-btn" onClick={getData}>Get Data</button>
      </header>

      <main className="gallery">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.download_url} alt={item.author} />
            <div className="meta">{item.author}</div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App