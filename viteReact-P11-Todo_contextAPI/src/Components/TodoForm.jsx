import React from 'react'

function TodoForm() {

    const add =(e) => {
        e.preventDefault()
        
    }
  return (
    <form onSubmit={add}>
        <h1 className='p-5 text-2xl text-white'>Manage Todos </h1>

        <input type='text'
        value={title}
        placeholder='Write Todo'
        onChange={''}
        />
        <button className='bg-blue-500 text-white' onClick={''}>add</button>
      
    </form>
  )
}

export default TodoForm
