import { useState } from 'react'

// A reusable component that displays and lets you edit notes
function NotesList({ notes, onUpdate }) {
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState('')

  return (
    <div style={{ marginTop: '1rem' }}>
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '0.5rem' }}>
          <strong>{note.title}</strong> <em>({note.created})</em>
          {editingId === note.id ? (
            <>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={4}
                style={{ width: '100%' }}
              />
              <button onClick={() => {
                onUpdate(note.id, editContent)
                setEditingId(null)
              }}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{note.content}</p>
              <button onClick={() => {
                setEditingId(note.id)
                setEditContent(note.content)
              }}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default NotesList
