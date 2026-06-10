import React from 'react'

const Sec1Center = () => {
  return (
    <section
      className="h-[58vh] w-full px-10 py-10 bg-center bg-cover rounded-3xl overflow-hidden relative"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1504723246034-0977641ea907?q=80&w=1279&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Best Deal Are Waiting For You
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Sec1Center
