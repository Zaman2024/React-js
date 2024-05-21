import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'

function TodoForm() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

const handlerSubmit = (e) => {
    e.preventDefault()

    dispatch(addTodo(input))
    setInput('')
}

  return (
    <form onSubmit={handlerSubmit}>
        <h1 className='bg-slate-600 text-white'>Todos with React-Redux</h1>
        <div className="flex flex-center items-center bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 mx-60 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <input
            type='text'
            value={input}
            placeholder='Write Todos'
            onChange={(e) =>setInput(e.target.value)}
            className='w-full py-1.5 px-6 rounded-s-lg text-black outline-none'
            
        />
      <button type='submit'
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-e-lg text-lg"
      >Add</button>
      </div>
    </form>
  )
}

export default TodoForm
