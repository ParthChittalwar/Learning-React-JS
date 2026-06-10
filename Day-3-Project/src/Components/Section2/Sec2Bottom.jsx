import React from 'react'

const Sec2Bottom = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <div className="flex-1 bg-linear-to-br from-cyan-200 via-sky-200 to-indigo-200 shadow-lg rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-2">Guarantee of the best price</h2>
        <p className="text-slate-700">We offer only the best price in the market. If you find a better price, we will refund you.</p>
      </div>

      <div className="flex-1 bg-linear-to-br from-rose-200 via-fuchsia-200 to-purple-200 shadow-lg rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-2">Refund and Cancellation</h2>
        <p className="text-slate-700">Best refund policy in the market. For cancellations or refunds, please contact our support.</p>
      </div>

      <div className="flex-1 bg-linear-to-br from-lime-200 via-emerald-200 to-teal-200 shadow-lg rounded-xl p-6 text-slate-900">
        <h2 className="text-xl font-semibold mb-2">Covid-19 Information</h2>
        <p className="text-slate-700">Find the latest Covid-19 guidelines and safety measures here.</p>
      </div>
    </div>
  )
}

export default Sec2Bottom
