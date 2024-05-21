import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'

function TodoForm() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

const handlerSubmit = (e) => {
    e.preventDefault()
    
    dispatch(addTodo(input))
}

  return (
    <form onSubmit={handlerSubmit}>
        <h1 className='bg-slate-600 text-white'>Zaman</h1>
        <input
            type='text'
            value={input}
            placeholder='Write Todos'
            onChange={(e) =>setInput(e.target.value)}
        />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm
