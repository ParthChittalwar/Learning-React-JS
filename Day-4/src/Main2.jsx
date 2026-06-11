import React, { useState } from 'react'

const Main2 = () => {
  const [arr, setarr] = useState({ name: 'parth', age: 20 })

  const ChangeName = () => {
    const arr2 = { ...arr }
    arr2.name = 'shreyash'
    setarr(arr2)
  }

  const ChangeAge = () => {
    const arr2 = { ...arr }
    arr2.age = 21
    setarr(arr2)
  }

  const Reset = () => {
    setarr({ name: 'parth', age: 20 })
  }

  return (
    <div className="bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <h1 className="mb-6 text-center text-3xl font-semibold text-slate-900">
          My name is {arr.name}
        </h1>

        <p className="mb-8 text-center text-slate-600">
          Age is {arr.age}
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          <button
            onClick={ChangeName}
            className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Change Name
          </button>

          <button
            onClick={ChangeAge}
            className="rounded-2xl  bg-slate-700 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-600"
          >
            Change Age
          </button>

          <button
            onClick={Reset}
            className="mt-6 w-full rounded-2xl bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main2
