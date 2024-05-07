import React,{useState} from 'react'

function TodoForm() {

  const [todo, setTodo] = useState('')


  const add = () => {

  }
  return (
    <form onSubmit={add}
    className='bg-slate-300 '
    >
      <h1 className='bg-slate-800 text-white'>Manage Todos</h1>
      <input 
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Write Todo'
        className='my-5 p-1 outline-none rounded-s-lg'
      />
      <button type='Submit' className='bg-green-500 text-white px-3 py-1 rounded-e-lg' >Add</button>
    </form>
  )
}

export default TodoForm
