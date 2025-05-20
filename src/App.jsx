import { Routes, Route, Link } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import HelloPage from './pages/HelloPage'
import NotesPage from './pages/NotesPage'

// Main app with top navigation and route mapping
function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/hello">Hello</Link> |{' '}
        <Link to="/todos">To-Do List</Link> |{' '}
        <Link to="/notes">Notes</Link>
      </nav>

      <Routes>
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/" element={<HelloPage />} />
      </Routes>
    </div>
  )
}

export default App
