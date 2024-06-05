import React from 'react'

function UpdateForm() {
  return (
    <>
        <form >
        <h1 className='flex justify-center items-center  mx-60 py-1 px-5 rounded-t-lg bg-slate-600 text-white text-xl'>Todos with React-Redux</h1>
        
        <div className="flex flex-center items-center bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 mx-60 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <input
            type='text'
            value={''}
            placeholder='Update Todos'
            onChange={''}
            className='w-full py-1.5 px-6 rounded-s-lg text-black outline-none'
            
        />
      <button type='submit'
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-e-lg text-lg"
      >Update</button>
      </div>
    </form>
      
    </>
  )
}

export default UpdateForm;
