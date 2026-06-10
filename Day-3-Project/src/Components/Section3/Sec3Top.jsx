import React from 'react'

const Sec3Top = () => {
  const bgUrl = "https://images.unsplash.com/photo-1686278530308-1e6ef38b5ed6?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="mx-4 my-6">
      {/* Background image block that occupies full width and half viewport height */}
      <div
        className="w-full bg-center bg-cover rounded-lg overflow-hidden p-6 flex items-center"
        style={{ backgroundImage: `url(${bgUrl})`, height: '50vh' }}
      >
        <div className="bg-black/40 p-4 rounded">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">Get our new App and Book flight in 10% Discount</h1>
          <h3 className="text-white text-sm md:text-base mb-4">Download Now the skyplan app and have control to the trips in your pocket. With our app you will get a secret code to get 10% discount.</h3>
          <button className="bg-white text-black px-4 py-2 rounded hover:opacity-90">Download Now</button>
        </div>
      </div>
    </div>
  )
}

export default Sec3Top
