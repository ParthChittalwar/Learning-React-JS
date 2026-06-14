import React, { useState } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', message: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, sender: 'You', message: 'I\'m doing great! How about you?', time: '10:31 AM' },
    { id: 3, sender: 'John', message: 'Excellent! Want to grab coffee?', time: '10:32 AM' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', message: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
      setNewMessage('')
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">💬 Chat Application</h1>
        <p className="text-sm text-pink-500 font-medium">Real-time messaging with file sharing and notifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-pink-200 shadow-md flex flex-col h-96">
            <div className="p-4 border-b border-pink-100 bg-gradient-to-r from-pink-50 to-rose-50">
              <h3 className="font-bold text-pink-800">John Doe</h3>
              <p className="text-xs text-pink-500">Online</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'You' ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'You' ? 'text-pink-100' : 'text-gray-500'}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-pink-100 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button onClick={handleSendMessage} className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition">Send</button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
            <h3 className="text-lg font-bold text-pink-800 mb-4">👥 Active Users</h3>
            <div className="space-y-3">
              {['John Doe', 'Sarah Smith', 'Mike Johnson'].map((user, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">{user}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg border border-pink-200">
            <h3 className="font-bold text-pink-800 mb-3">✨ Features</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Real-time messages</li>
              <li>✓ File sharing</li>
              <li>✓ User profiles</li>
              <li>✓ Typing indicators</li>
              <li>✓ Message search</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
