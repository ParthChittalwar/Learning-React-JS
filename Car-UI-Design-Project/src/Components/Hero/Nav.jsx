import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-start px-8 py-1'>
      <div className='flex flex-col'>
        <h1 className='text-6xl  leading-tight' style={{ fontFamily: 'Mona Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}>Carcapilot<span className='text-3xl align-super'>©</span></h1>
        <span className='text-6xl  leading-tight' style={{ fontFamily: 'Mona Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}>U1CORE Design</span>
      </div>

      <div className='flex flex-col items-end text-right ml-auto'>
        <div className='flex gap-35 mt-4'>
          <h4 className='text-xs'>2026</h4>
          <h4 className='text-xs'>Design Bureau</h4>
        </div>
        <h4 className='text-xs mt-24'>Modern Vehicle Discovery And MarketPlace Platform</h4>
      </div>
    </nav>
  )
}

export default Nav
