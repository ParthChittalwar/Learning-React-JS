import React from 'react'

const navItems = [
  'Help',
  'FAQ',
  'Contact',
  'Terms & Conditions',
  'Privacy Policy',
]

const Sec3Bottom = () => {
  return (
    <footer className="bg-emerald-300 text-slate-900 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">SkyPlan</h1>
          <p className="text-sm text-slate-700 mt-1">Your travel planning companion</p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-slate-800 hover:text-slate-900 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Sec3Bottom
