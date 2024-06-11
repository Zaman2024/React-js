import React from 'react'

function UpdateForm() {
  return (
    <form >
      <div className='flex justify-center items-center m-3 w-auto'>
        <input
        type='text'
        placeholder='Update Todo'
        className='rounded-s-xl h-10 outline-none px-2 text-lg w-full' 
        />
        <button 
        type='submit'
        className=' bg-red-800 text-white p-2 rounded-e-xl'
        >Update</button>
      </div>
      
    </form>
  )
}

export default UpdateForm
