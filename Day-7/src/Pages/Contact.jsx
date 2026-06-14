import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-3 text-pink-800">Get In Touch</h1>
      <p className="text-sm text-pink-500 mb-8 font-medium">We'd love to hear from you. Send us a message!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg border-l-4 border-pink-300 shadow-md">
          <h2 className="text-2xl font-semibold text-pink-800 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message Subject"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-300 to-pink-400 text-white font-semibold py-3 rounded-lg hover:from-pink-400 hover:to-pink-500 transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-pink-300 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-pink-800 mb-2">📧 Email</h3>
            <p className="text-gray-700">parth@parthstudio.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-pink-300 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-pink-800 mb-2">📱 Phone</h3>
            <p className="text-gray-700">+91 (123) 456-7890</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-pink-300 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-pink-800 mb-2">📍 Location</h3>
            <p className="text-gray-700">India</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg border border-pink-200">
            <h3 className="text-lg font-bold text-pink-800 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-800 font-semibold">Twitter</a>
              <a href="#" className="text-pink-600 hover:text-pink-800 font-semibold">LinkedIn</a>
              <a href="#" className="text-pink-600 hover:text-pink-800 font-semibold">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
