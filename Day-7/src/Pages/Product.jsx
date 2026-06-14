import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const products = [
    {
      id: 1,
      title: '🎨 UI Design System',
      description: 'A comprehensive React component library with Tailwind CSS styling',
      features: ['10+ Components', 'Responsive Design', 'Dark Mode Support'],
      path: 'uidesign'
    },
    {
      id: 2,
      title: '🛒 E-Commerce Platform',
      description: 'Full-stack React application with shopping cart and payment integration',
      features: ['Product Catalog', 'Cart Management', 'User Authentication'],
      path: 'ecommerce'
    },
    {
      id: 3,
      title: '📊 Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts',
      features: ['Live Data', 'Charts & Graphs', 'Export Reports'],
      path: 'analytics'
    },
    {
      id: 4,
      title: '💬 Chat Application',
      description: 'Real-time messaging app built with React and WebSocket',
      features: ['Real-time Messages', 'User Profiles', 'File Sharing'],
      path: 'chat'
    },
    {
      id: 5,
      title: '📝 Task Manager',
      description: 'Productivity app to manage daily tasks with categories and reminders',
      features: ['Todo Lists', 'Categories', 'Reminders'],
      path: 'task'
    },
    {
      id: 6,
      title: '🎵 Music Streaming',
      description: 'Music player application with playlist management and recommendations',
      features: ['Playlists', 'Recommendations', 'Favorites'],
      path: 'music'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">Our Products</h1>
        <p className="text-sm text-pink-500 font-medium">Explore our collection of React applications and projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg border border-pink-200 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-pink-800 mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="border-t border-pink-100 pt-4">
                <h3 className="text-sm font-semibold text-pink-700 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="text-pink-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={`/product/${product.path}`} className="block w-full mt-4 bg-gradient-to-r from-pink-300 to-pink-400 text-white font-semibold py-2 rounded-lg hover:from-pink-400 hover:to-pink-500 transition duration-200 text-center">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border-l-4 border-pink-300 p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-pink-800 mb-4">📦 Why Choose Our Products?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-pink-700 mb-2">High Performance</h3>
            <p className="text-gray-600 text-sm">Optimized code for fast loading and smooth user experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-pink-700 mb-2">User Focused</h3>
            <p className="text-gray-600 text-sm">Designed with user experience and accessibility in mind</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-bold text-pink-700 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">Built with latest technologies and best practices</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
