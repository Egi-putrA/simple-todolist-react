import { useState } from 'react'

let currentTasks = [
  { name: 'Tugas 1', dueDate: Date() }
]

let completedTasks = [
  { name: 'Tugas 2', dueDate: Date(), completeDate: Date() }
]

function App() {
  const [tasks, setTask] = useState({ 
    current: currentTasks,
    completed: completedTasks
  })

  function addTask(formData) {
    alert(formData)
    const name = formData.get('name')
    const dueDate = formData.get('due_date')

    setTask(tasks => {
      return { 
        completed: tasks.completed, 
        current: [ ...tasks.current, { name, dueDate } ]
      }
    })
  }

  // TODO: Both current and completed task should be sorted by date
  // TODO: Each list should be can edit
  // TODO: Completed task should be display as button by default
  return (
    <div className="container">
      <h1>Simple todo list</h1>
      <form action={addTask}>
        <input type="text" name="name"/>
        <input type="date" name="due_date"/>
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
