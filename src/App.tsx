import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Simple todo list</h1>
      <form>
        <input type="text" />
        <input type="date"/>
        <button type="submit">Add task</button>
      </form>
      <ul>
        <li>
          <p>Tugas 1</p>
          <p> Due date: <span>16 Oktober 2024, 13:00 WIB</span></p>
        </li>
      </ul>
    </div>
  )
}

export default App
