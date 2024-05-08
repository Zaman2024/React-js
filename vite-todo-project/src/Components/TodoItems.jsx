import React, {useState} from 'react'
import { useTodo } from '../ContextAPI/TodoContext'

function TodoItems({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [TodoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()
  return (
    <div>
      <h1 className='bg-yellow-700 text-white'>Todo List</h1>

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
