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
  setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id ))
}

const toggleCompleted = (id) =>{
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed}: prevTodo ))
}

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem('todo'))

  if(todos && todos.lenght > 0) {
    setTodos(todos)
  }

}, [])

useEffect(() => {

  localStorage.setItem('todos', JSON.stringify(todos))

}, [todos])

  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>

      <div className='bg-slate-300 pb-2'>
        <TodoForm/>
      
      <div>
        {todos.map((todo) => (
          <div key={todo.id}
          >
              <TodoItems todo = {todo} />
          </div>
        ))} 
      </div>
      </div>
    </TodoProvider>
  )
}

export default App
