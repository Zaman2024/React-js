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
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      <button type='submit'
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >Add</button>
    </form>
  )
}

export default TodoForm
