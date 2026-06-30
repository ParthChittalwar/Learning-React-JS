import React from 'react'
import HeroRightNav from './HeroRightNav'

const HeroRight = () => {
  const backgroundImage =
    'https://i.pinimg.com/1200x/e9/e3/c2/e9e3c2f25eb00ec1bbdce343d804663c.jpg'

  return (
    <section
      className="relative overflow-hidden text-black"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <HeroRightNav />
        <div className="flex min-h-130 items-center">
          <div className="w-full max-w-2xl  sm:p-10 lg:p-12">
            <h1 className="mb-60 text-sm uppercase tracking-[0.32em] text-black sm:text-500">
              Discover the variety of vehicles
              that matches your budget!
            </h1>
            <p className="mt-2 text-lg leading-relaxed text-slate-700">
              Explore our wide selection and schedule a test drive today.
            </p>
            <button className="mt-5 inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
              Discover
            </button>
          </div>
        </div>
      </div>
      {/* Bottom-right credit */}
      <h1 className="absolute bottom-4 right-4 rounded bg-black/60 px-3 py-1 text-sm font-medium text-white">
        Parth Chittalwar
      </h1>
    </section>
  )
}

export default HeroRight
