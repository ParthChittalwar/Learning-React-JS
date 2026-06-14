import React, { useState } from 'react'

const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React Hooks', category: 'Learning', priority: 'High', done: false },
    { id: 2, title: 'Build a portfolio', category: 'Projects', priority: 'High', done: false },
    { id: 3, title: 'Review JavaScript', category: 'Learning', priority: 'Medium', done: true }
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, category: 'General', priority: 'Medium', done: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg border border-pink-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-pink-800">📝 Task Manager</h1>
        <p className="text-sm text-pink-500 font-medium">Productivity app to manage daily tasks with categories and reminders</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md mb-6">
            <h2 className="text-2xl font-bold text-pink-800 mb-4">Add New Task</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button onClick={addTask} className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition">Add</button>
            </div>
          </div>

          <div className="space-y-3">
            {tasks.map(task => (
              <div key={task.id} className={`p-4 rounded-lg border-l-4 flex justify-between items-center transition ${task.done ? 'bg-gray-50 border-gray-300' : 'bg-white border-pink-300'}`}>
                <div className="flex items-center flex-1">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 accent-pink-500 mr-4"
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold ${task.done ? 'line-through text-gray-500' : 'text-pink-800'}`}>{task.title}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">{task.category}</span>
                      <span className={`text-xs px-2 py-1 rounded ${task.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{task.priority}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700 font-bold">✕</button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-pink-200 shadow-md">
            <h3 className="text-lg font-bold text-pink-800 mb-4">📊 Statistics</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-3xl font-bold text-pink-700">{tasks.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">{tasks.filter(t => t.done).length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{width: `${(tasks.filter(t => t.done).length / tasks.length) * 100}%`}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg border border-pink-200">
            <h3 className="font-bold text-pink-800 mb-3">⭐ Features</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Create tasks</li>
              <li>✓ Categories</li>
              <li>✓ Priority levels</li>
              <li>✓ Mark complete</li>
              <li>✓ Track progress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
