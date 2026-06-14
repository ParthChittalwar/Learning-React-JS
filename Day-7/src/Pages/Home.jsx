import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100">
      <h1 className="text-4xl font-bold mb-3 text-pink-800">Home</h1>
      <p className="text-sm text-pink-500 mb-6 font-medium">Created By Parth Chittalwar</p>

      <div className="space-y-4 mb-8 bg-white p-6 rounded-lg border-l-4 border-pink-300">
        <p className="text-gray-700 leading-relaxed">This is the Day 7 of my React Journey and Last Day of the Basic Learning</p>
        <p className="text-gray-700 leading-relaxed">I Completed My React Basic Learning</p>
        <h3 className="text-lg font-semibold text-pink-600 pt-2">I Learn Basic React JS By Watching From Sheryians Coding School Youtube Channel</h3>
      </div>

      <div className="mb-8">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-pink-200">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/3LRZRSIh_KE"
            title="Sheryians School Coding - React JS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/product">
          <button className="mt-4 px-8 py-4 text-lg font-semibold bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition">
            Check Out My Products And Courses
          </button>
        </Link>
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-pink-800 bg-pink-100 p-4 rounded-lg border-l-4 border-pink-300">I learn so many things from this Video</h2>
    </div>
  )
}

export default Home
