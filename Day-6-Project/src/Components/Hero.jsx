import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Hero = () => {
  const [gallery, setGallery] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = async (pageNumber = 1) => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=12`)
      setGallery(response.data)
      setPage(pageNumber)
    } catch (error) {
      console.error(error)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
      fetchData(page - 1)
    }
  }

  const handleNext = () => {
    fetchData(page + 1)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-semibold mb-2">Gallery App</h1>
          <p className="text-slate-400">Click the button to load a simple photo gallery.</p>
        </header>

        <div className="flex flex-col items-center gap-4 mb-10 sm:flex-row sm:justify-center">
          <button
            onClick={() => fetchData(1)}
            className="rounded-full bg-sky-500 px-6 py-3 text-white font-medium shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition transform duration-300 ease-out hover:-translate-y-1"
          >
            Load Gallery
          </button>
          {gallery.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className="rounded-full bg-slate-800 px-4 py-2 text-slate-100 font-medium shadow-lg shadow-slate-950/20 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-slate-700 transition transform duration-300 ease-out hover:-translate-y-1"
              >
                Prev
              </button>
              <span className="text-slate-200">Page {page}</span>
              <button
                onClick={handleNext}
                className="rounded-full bg-slate-800 px-4 py-2 text-slate-100 font-medium shadow-lg shadow-slate-950/20 hover:bg-slate-700 transition transform duration-300 ease-out hover:-translate-y-1"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {gallery.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/40 transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                <img
                  src={`${item.download_url}?w=600&h=400&fit=crop`}
                  alt={item.author}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-all duration-500 ease-out hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white">{item.author}</h2>
                  <p className="mt-2 text-sm text-slate-400 truncate">{item.url}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400">No images loaded yet. Click the button above.</div>
        )}
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm text-slate-400">Created by</p>
        <h1 className="mt-1 text-xl font-semibold text-sky-400 tracking-wide animate-pulse">
          Parth Chittalwar
        </h1>
      </div>
    </div>
  )
}

export default Hero
