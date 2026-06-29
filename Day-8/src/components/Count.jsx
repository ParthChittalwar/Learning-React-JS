import React, { useState } from 'react'

const Count = () => {

    const [num, setNum] = useState(0)

    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-slate-900">Number Count is {num}</h1>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => {
            setNum(num + 1);
          }}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (num > 0) setNum(num - 1);
          }}
          className="rounded-lg bg-orange-500 px-5 py-3 text-white shadow hover:bg-orange-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setNum(0);
          }}
          className="rounded-lg bg-gray-500 px-5 py-3 text-white shadow hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Count
