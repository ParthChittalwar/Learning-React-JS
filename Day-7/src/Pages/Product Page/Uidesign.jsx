import React from 'react'

const Uidesign = () => {
  const components = [
    { name: 'Buttons', variants: '8 variants', description: 'Primary, secondary, outlined, etc.' },
    { name: 'Forms', variants: '12 variants', description: 'Input fields, checkboxes, radio buttons' },
    { name: 'Cards', variants: '6 variants', description: 'Content containers with different layouts' },
    { name: 'Navigation', variants: '5 variants', description: 'Navbar, sidebar, tabs, breadcrumbs' },
    { name: 'Modals', variants: '4 variants', description: 'Dialogs, alerts, confirmation modals' },
    { name: 'Badges', variants: '10 variants', description: 'Status indicators and labels' }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">🎨 UI Design System</h1>
        <p className="text-sm text-pink-500 font-medium">Comprehensive React component library with Tailwind CSS</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-lg border border-pink-200 shadow-md">
            <h2 className="text-2xl font-bold text-pink-800 mb-6">📦 Component Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {components.map((comp, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-pink-800">{comp.name}</h3>
                    <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded">{comp.variants}</span>
                  </div>
                  <p className="text-sm text-gray-600">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
            <h3 className="text-lg font-bold text-pink-800 mb-4">🎯 Standards</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Accessibility (WCAG)</li>
              <li>✓ Responsive design</li>
              <li>✓ Dark mode support</li>
              <li>✓ TypeScript support</li>
              <li>✓ Storybook integration</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg border border-pink-200">
            <h3 className="font-bold text-pink-800 mb-3">💻 Tech Stack</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>React 18+</p>
              <p>Tailwind CSS</p>
              <p>Storybook</p>
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">🚀 Getting Started</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
          <code>npm install @parthstudio/ui-design\n\nimport Button from '@parthstudio/ui-design'\n\n&lt;Button variant="primary"&gt;Click me&lt;/Button&gt;</code>
        </pre>
      </div>
    </div>
  )
}

export default Uidesign
