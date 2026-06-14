import React from 'react'

const Analytics = () => {
  const stats = [
    { label: 'Users', value: '12,483', change: '+12.5%' },
    { label: 'Revenue', value: '$48,392', change: '+8.2%' },
    { label: 'Conversions', value: '2,843', change: '+5.3%' },
    { label: 'Engagement', value: '94.2%', change: '+2.1%' }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">📊 Analytics Dashboard</h1>
        <p className="text-sm text-pink-500 font-medium">Real-time data visualization and business insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-pink-300 shadow-md">
            <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-pink-800 mb-2">{stat.value}</p>
            <p className="text-green-600 text-sm font-semibold">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">📈 Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-3 text-lg">✓</span>Real-time data tracking
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-3 text-lg">✓</span>Interactive charts and graphs
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-3 text-lg">✓</span>Custom report generation
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-3 text-lg">✓</span>Data export (CSV, PDF)
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-3 text-lg">✓</span>Predictive analytics
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-3 text-lg">✓</span>Performance benchmarking
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">💡 Benefits</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-pink-700 mb-1">Better Decision Making</h3>
              <p className="text-gray-600 text-sm">Data-driven insights to make informed business decisions</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-700 mb-1">Performance Tracking</h3>
              <p className="text-gray-600 text-sm">Monitor KPIs and metrics in real-time</p>
            </div>
            <div>
              <h3 className="font-semibold text-pink-700 mb-1">Cost Optimization</h3>
              <p className="text-gray-600 text-sm">Identify areas for improvement and cost savings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
