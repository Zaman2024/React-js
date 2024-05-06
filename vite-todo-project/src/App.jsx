import { useEffect, useState } from 'react'
import { TodoProvider } from './ContextAPI'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {
  const [todos, setTodos] = useState([])

const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
}

const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
}

const deleteTodo = (id) => {
  setTodos((prevTodo) =>{})
}



  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo}}>

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
