import React from 'react'
import { useState } from 'react'

const Main = () => {
  const [num, setnum] = useState(0)

  const Increase = () => {
    setnum(num + 1)
  }

  const Decrease = () => {
    setnum(num - 1)
  }

  const Increaseby5 = () => {
    setnum(num + 5)
  }

  const Decreaseby5 = () => {
    setnum(num - 5)
  }

  const Reset = () => {
    setnum(0)
  }

  return (
    <div className=" bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <h1 className="mb-8 text-center text-4xl font-semibold text-slate-900">
          Value is {num}
        </h1>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={Increase}
            className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Increase
          </button>

          <button
            onClick={Decrease}
            className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Decrease
          </button>

          <button
            onClick={Increaseby5}
            className="rounded-2xl bg-slate-700 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-600"
          >
            Increase by 5
          </button>

          <button
            onClick={Decreaseby5}
            className="rounded-2xl bg-slate-700 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-600"
          >
            Decrease by 5
          </button>
        </div>

        <button
          onClick={Reset}
          className="mt-6 w-full rounded-2xl bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-400"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Main
