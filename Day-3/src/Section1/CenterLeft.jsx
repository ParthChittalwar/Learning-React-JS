import React from 'react'

const CenterLeft = () => {
  return (
    <div className="flex flex-col items-start gap-6 p-10 pb-12">
      <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        30 Days Free Trial
      </h4>
      <h1 className="text-5xl font-bold leading-tight text-black">
        The Best To <br />
        Showcase <br />
        Your Project
      </h1>
      <p className="max-w-xl text-base text-gray-600">
        With Landify, you can showcase your project to the world.<br/> Landify is a responsive landing page template.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Try For Free
        </button>
        <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
          See How It Works
        </button>
      </div>
    </div>
  )
}

export default CenterLeft
