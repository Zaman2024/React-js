import React, { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './ContextAPI/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'


function App() {
  const [todos, setTodos] = useState([])

//---- Todos Methods-------
  const addTodo =(todo) => {
    setTodos((prev) => [{id : Date.now(), ...todo}, ...prev])
  }
  const updateTodo =(id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=> todo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id? {...prevTodo, completed: !prevTodo.completed}:prevTodo) )
  }
//--- Use of localStorage --------

 useEffect(()=> {
  const todos = JSON.parse(localStorage.getItem('todos'))

  if(todos && todos.length > 0) {
    setTodos(todos)
  }

 }, [] )


 useEffect(()=> {
  localStorage.setItem('todos', JSON.stringify(todos))
 }, [todos] )
 //---------------------------
  return (
    <TodoProvider value ={{todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div>
        <h1 className='bg-slate-800 text-white text-2xl p-2 rounded-t-xl'>Manage Todos</h1>
        <div className='bg-blue-300 pt-3 pb-2 rounded-b-xl'>
          <TodoForm/>
        <div>
          {todos.map((todo)=>(
            <div key={todo.id} >
              <TodoItems todo = {todo} />
            </div>
          ))}
        </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
