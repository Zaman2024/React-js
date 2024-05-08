import React, {useState} from 'react'
import { useTodo } from '../ContextAPI/TodoContext'

function TodoItems({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [TodoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()
  return (
    <div className='m-1 px-2 py-1'>
      <input
        type='checkbox'
        checked ={todo.completed}
        onChange={toggleComplete}
        className='cursor-pointer'
       />

      <input 
        type='text'
        value={TodoMsg}
        onChange={(e) =>setTodoMsg(e.target.value)}
        />
    </div>
  )
}

export default TodoItems
