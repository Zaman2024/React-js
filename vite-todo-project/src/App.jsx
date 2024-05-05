import { useState } from 'react'
import { TodoProvider } from './ContextAPI'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {
  const [todos, setTodos] = useState([])

const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
}

  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

      <div>
        <TodoForm/>
      </div>
      <div>
        <TodoItems/>
      </div>
      
    </TodoProvider>
  )
}

export default App
