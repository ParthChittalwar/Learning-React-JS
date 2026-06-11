import React from 'react'
import Main from './Components/Main'
import Main2 from './Main2'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 flex flex-col items-center gap-6">
      <div className="w-full max-w-4xl rounded-4xl bg-white/80 p-6 shadow-xl ring-1 ring-slate-200">
        <Main />
      </div>
      <div className="w-full max-w-4xl rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-slate-200">
        <Main2 />
      </div>
    </div>
  )
}

export default App

