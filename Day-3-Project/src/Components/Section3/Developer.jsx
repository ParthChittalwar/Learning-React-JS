import React from 'react'

const Developer = () => {
  return (
    <footer className="mt-12 flex flex-col items-center justify-center py-8">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">Built with</span>
        <span className="inline-block animate-pulse text-red-500">♥</span>
        <h1 className="text-lg font-semibold bg-clip-text text-transparent bg-[radial-gradient(circle,#6366f1,#ec4899,#f59e0b)]">
          Developed by Parth Chittalwar
        </h1>
      </div>

      <p className="mt-2 text-center text-xs text-gray-400 max-w-xl px-4">
        This is the Day 3 Project of React — UI designed using Tailwind CSS.
      </p>

      <div className="mt-4 flex items-center gap-3">
        <a
          href="#"
          className="transform rounded-full bg-indigo-600 px-4 py-1 text-xs font-medium text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          View Template
        </a>

        <span className="ml-2 inline-block animate-bounce rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Developer
