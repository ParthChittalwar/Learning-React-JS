import React, { useState } from 'react'

const Music = () => {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const playlist = [
    { id: 1, title: 'React Journey', artist: 'Dev Vibes', duration: '3:45' },
    { id: 2, title: 'Coding Night', artist: 'Syntax Sound', duration: '4:12' },
    { id: 3, title: 'Web Harmony', artist: 'Frontend Beats', duration: '3:28' },
    { id: 4, title: 'Component Flow', artist: 'Code Composer', duration: '4:05' },
    { id: 5, title: 'State of Mind', artist: 'React Remix', duration: '3:52' }
  ]

  const recommendations = [
    { id: 1, title: 'ECMAScript Dreams', artist: 'JS Masters' },
    { id: 2, title: 'Async Await', artist: 'Promise Band' },
    { id: 3, title: 'Hook It Up', artist: 'Functional Sounds' }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">🎵 Music Streaming</h1>
        <p className="text-sm text-pink-500 font-medium">Music player application with playlist management and recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-pink-200 shadow-md overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-pink-300 to-pink-400 p-8 flex items-center justify-center">
              <div className="text-9xl">🎵</div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-pink-800 mb-2">{playlist[currentSong].title}</h2>
              <p className="text-pink-600 mb-6">{playlist[currentSong].artist}</p>
              
              <div className="mb-6">
                <div className="w-full bg-pink-200 rounded-full h-2 mb-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>1:42</span>
                  <span>{playlist[currentSong].duration}</span>
                </div>
              </div>

              <div className="flex justify-center items-center gap-6">
                <button className="text-pink-600 hover:text-pink-800 text-2xl">⏮️</button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl hover:from-pink-500 hover:to-pink-600 transition"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button className="text-pink-600 hover:text-pink-800 text-2xl">⏭️</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-pink-200 shadow-md p-6">
            <h3 className="text-2xl font-bold text-pink-800 mb-4">📋 Playlist</h3>
            <div className="space-y-2">
              {playlist.map((song, idx) => (
                <div 
                  key={song.id}
                  onClick={() => setCurrentSong(idx)}
                  className={`p-4 rounded-lg cursor-pointer transition ${currentSong === idx ? 'bg-pink-200 border-l-4 border-pink-500' : 'bg-pink-50 hover:bg-pink-100'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-pink-800">{song.title}</p>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                    <span className="text-sm text-gray-600">{song.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
            <h3 className="text-lg font-bold text-pink-800 mb-4">✨ Recommended</h3>
            <div className="space-y-3">
              {recommendations.map(song => (
                <div key={song.id} className="p-3 bg-pink-50 rounded-lg border border-pink-200 hover:bg-pink-100 cursor-pointer transition">
                  <p className="font-semibold text-pink-800 text-sm">{song.title}</p>
                  <p className="text-xs text-gray-600">{song.artist}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg border border-pink-200">
            <h3 className="font-bold text-pink-800 mb-3">🎧 Features</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Playlists</li>
              <li>✓ Recommendations</li>
              <li>✓ Favorites</li>
              <li>✓ Play history</li>
              <li>✓ Queue management</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-md text-center">
            <p className="text-2xl mb-2">🎙️</p>
            <h3 className="font-bold text-pink-800">Now Listening</h3>
            <p className="text-sm text-gray-600">50K listeners</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
