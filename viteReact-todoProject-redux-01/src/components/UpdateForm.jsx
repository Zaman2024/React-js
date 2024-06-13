import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { todoUpdated } from '../feature/todo/todoSlice';


function UpdateForm() {
  const todoToUpdate = useSelector((state) => state.todoUpdate)
  const [update, setUpdate] = useState(todoToUpdate.text)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(/^\s*$/.test(update)){
      alert('Enter new text')
      setUpdate('')
    } else{
      dispatch(todoUpdated({
        id : todoToUpdate.id,
        text : update
      }))
    }
  }


  return (
    <form onSubmit={handleSubmit} >
      <div className='flex justify-center items-center m-3 w-auto'>
        <input
        type='text'
        value={update}
        onChange={(e) => setUpdate(e.target.value) }
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

export default UpdateForm;
