import { useState, useEffect } from 'react'

function HelloPage() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count')
    return saved ? parseInt(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/pages/HelloPage.jsx</code> and save to test HMR</p>
      </div>
    </div>
  )
}

export default HelloPage
