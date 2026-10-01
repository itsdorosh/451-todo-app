import { useState } from 'react'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const handleAdd = () => {}

  return (
    <section id="center">
      <h1>Todo App</h1>
      <ItemForm onAdd={handleAdd} />
      <ItemList items={tasks} />
    </section>
  )
}

export default App
