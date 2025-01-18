import { useState } from 'react'

let currentTasks = [
  { name: 'Tugas 1', dueDate: Date() }
]

let completedTasks = [
  { name: 'Tugas 2', dueDate: Date() }
]

function App() {
  const [tasks, setTask] = useState({ 
    current: currentTasks, 
    completed: completedTasks 
  })

  // TODO: Both current and completed task should be sorted by date
  // TODO: Each list should be can edit
  // TODO: Completed task should be display as button by default
  return (
    <div className="container">
      <h1>Simple todo list</h1>
      <form>
        <input type="text" />
        <input type="date"/>
        <button type="submit">Add task</button>
      </form>
      <h2>Current tasks</h2>
      <ul>
        {tasks.current.map((task, index) => (
          <li key={index}>
            <p>{task.name}</p>
            <p> Due date: <span>{task.dueDate}</span></p>
          </li>
        ))}
      </ul>
      <h2>Completed tasks</h2>
      <ul>
        {tasks.completed.map((task, index) => (
          <li key={index}>
            <p>{task.name}</p>
            <p> Due date: <span>{task.dueDate}</span></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

//            <p> Due date: <span>16 Oktober 2024, 13:00 WIB</span></p>
export default App
