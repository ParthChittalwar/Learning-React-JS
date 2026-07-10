import React from 'react'
import axios from 'axios'

const ApiCalling = () => {


const [data, setData] = React.useState([]);

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20');
  setData(response.data);
}

  return (
    <div style={{ padding: '20px' }}>
      <h3>Api Calling</h3>
      <button onClick={() => {
        getData();
      }} style={{ marginBottom: '20px', padding: '10px 20px', fontSize: '16px' }}>Get Data</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {data.map((item) => (
          <div key={item.id} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={item.download_url} alt={item.author} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <p style={{ padding: '10px', margin: '0', fontSize: '14px', color: '#666' }}>{item.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApiCalling
