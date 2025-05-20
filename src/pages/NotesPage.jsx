import { useState, useEffect } from 'react'
import NotesList from '../components/NotesList'

// A page component to manage notes
function NotesPage() {
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage on first render
    const saved = localStorage.getItem('notes')
    return saved ? JSON.parse(saved) : []
  })

  const [newNote, setNewNote] = useState({ title: '', content: '' })

  useEffect(() => {
    // Save notes to localStorage whenever notes change
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const noteWithTimestamp = {
        ...newNote,
        id: Date.now(),
        created: new Date().toLocaleString()
      }
      setNotes([...notes, noteWithTimestamp])
      setNewNote({ title: '', content: '' }) // Clear input
    }
  }

  const updateNote = (id, updatedContent) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, content: updatedContent } : note
    ))
  }

  return (
    <div>
      <h2>Notes</h2>
      <input
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Content"
        value={newNote.content}
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
      />
      <br />
      <button onClick={addNote}>Add Note</button>

      <NotesList notes={notes} onUpdate={updateNote} />
    </div>
  )
}

export default NotesPage
