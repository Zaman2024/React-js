import React,{useState} from 'react'
import { useTodo } from '../ContextAPI/TodoContext'

function TodoForm() {

  const [todo, setTodo] = useState([])
  const {addTodo} = useTodo()


  const add = (e) => {
    e.preventDefault()

    if(!todo) return

    addTodo({todo, completed : false})

    setTodo("")
  }
  
  return (
    <form onSubmit={add}
    className=' flex flex-col bg-slate-300 '
    >
      <h1 className='bg-slate-800 text-white'>Manage Todos</h1>
      <div className='flex justify-center'>
      <input 
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Write Todo'
        className='my-2 p-1 w-1/2 flex outline-none rounded-s-lg'
        
      />
      <button type='Submit' className='my-2 bg-green-500 text-white px-3 rounded-e-lg' >Add</button>
      </div>
    </form>
  )
}

export default TodoForm
