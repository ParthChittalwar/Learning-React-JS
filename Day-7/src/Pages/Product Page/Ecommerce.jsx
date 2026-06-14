import React, { useState } from 'react'

const Ecommerce = () => {
  const [cart, setCart] = useState([])
  
  const products = [
    { id: 1, name: 'React Course', price: '$49.99', rating: '4.8' },
    { id: 2, name: 'UI Design Bundle', price: '$79.99', rating: '4.9' },
    { id: 3, name: 'Advanced JS', price: '$39.99', rating: '4.7' },
    { id: 4, name: 'Web Dev Bootcamp', price: '$99.99', rating: '4.9' }
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0)

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">🛒 E-Commerce Platform</h1>
        <p className="text-sm text-pink-500 font-medium">Full-stack React application with shopping cart and payment integration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">📦 Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white p-6 rounded-lg border border-pink-200 shadow-md hover:shadow-lg transition">
                <div className="mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📚</span>
                  </div>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-pink-700">{product.price}</span>
                  <span className="text-yellow-500">⭐ {product.rating}</span>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-300 to-pink-400 text-white font-semibold py-2 rounded-lg hover:from-pink-400 hover:to-pink-500 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md sticky top-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4">🛍️ Cart ({cart.length})</h3>
            <div className="max-h-96 overflow-y-auto mb-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Your cart is empty</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-pink-50 rounded border-l-2 border-pink-300">
                    <span className="text-sm text-gray-700">{item.name}</span>
                    <span className="font-semibold text-pink-700">{item.price}</span>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <>
                <div className="border-t border-pink-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Tax (10%):</span>
                    <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-pink-200 pt-2 flex justify-between">
                    <span className="font-bold text-pink-800">Total:</span>
                    <span className="font-bold text-pink-800">${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold py-2 rounded-lg hover:from-green-500 hover:to-green-600 transition">
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-md text-center">
          <p className="text-3xl mb-2">🚚</p>
          <h3 className="font-bold text-pink-800 mb-1">Fast Shipping</h3>
          <p className="text-sm text-gray-600">Delivery within 2-3 days</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-md text-center">
          <p className="text-3xl mb-2">💳</p>
          <h3 className="font-bold text-pink-800 mb-1">Secure Payment</h3>
          <p className="text-sm text-gray-600">Multiple payment options</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-md text-center">
          <p className="text-3xl mb-2">↩️</p>
          <h3 className="font-bold text-pink-800 mb-1">Easy Returns</h3>
          <p className="text-sm text-gray-600">30-day money back guarantee</p>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
