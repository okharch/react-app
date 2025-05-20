import { Routes, Route, Link } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import HelloPage from './pages/HelloPage'

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/hello">Hello</Link> | <Link to="/todos">To-Do List</Link>
      </nav>

      <Routes>
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/" element={<HelloPage />} />
      </Routes>
    </div>
  )
}

export default App
