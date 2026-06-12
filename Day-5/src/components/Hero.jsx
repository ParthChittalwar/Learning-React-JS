import React, { useState } from 'react'

const Hero = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    setNotes([{ id: Date.now(), title: title.trim(), content: content.trim() }, ...notes])
    setTitle('')
    setContent('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">Create Your Notes</h1>

        <form onSubmit={SubmitHandler} className="grid gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none"
            type="text"
            placeholder="Write Heading Of Note"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-sky-400 focus:outline-none resize-none"
            placeholder="Write Your Note"
            rows="5"
          />
          <button
            type="submit"
            className="inline-flex justify-center rounded-2xl bg-sky-600 px-6 py-3 text-white shadow-lg transition hover:bg-sky-700"
          >
            Save
          </button>
        </form>

        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-slate-900">Saved Notes</h2>
            <span className="text-sm text-slate-500">{notes.length} note(s)</span>
          </div>

          {notes.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-500">
              No notes yet. Add a note to see it here.
            </p>
          ) : (
            <div className="space-y-4">
              {notes.map((note) => (
                <div key={note.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-slate-900">{note.title}</h3>
                      <p className="mt-2 text-slate-600 line-clamp-2">{note.content}</p>
                    </div>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 flex-shrink-0"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
