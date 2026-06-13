import React, { useState } from 'react'
import axios from 'axios'

const API = () => {

const [num, setnum] = useState(0)

const getData = async () => {
    const respone = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(respone)
}

const getPhoto = async () => {
    const photo = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log(photo)
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">value is {num}</h1>
        <button onClick={() => {
          setnum(num+1);
          getData();
        }} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >Increase</button>
     <button onClick={() => {
         setnum(num-1);
         getPhoto();
     }}
     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        
     >Decrease</button>
     <button onClick={() => {
        setnum(0)
     }}
     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
     >Reset</button>
      </div>
    </div>
  )
}

export default API
