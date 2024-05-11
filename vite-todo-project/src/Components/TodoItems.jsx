import React, {useState} from 'react'
import { useTodo } from '../ContextAPI/TodoContext'

function TodoItems({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }







  return (
    <div 

    className={`flex justify-center items-center w-1/2 ml-72 my-1 px-2 py-1 border border-black/10 rounded-lg  gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
      todo.completed ? "bg-[#c6e9a7]" : "bg-[#6b6470]"
  }`}
    
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
       />

      <input 
        type='text'
        value={TodoMsg}
        onChange={(e) =>setTodoMsg(e.target.value)}
        readOnly = {!isTodoEditable}
        className={`border outline-none w-1/2 bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
      } ${todo.completed ? "line-through" : ""}`}
        />

        <button onClick={deleteTodo}>"fa-solid fa-folder"</button>

        <button onClick={deleteTodo}>delet</button>
    </div>
  )
}

export default TodoItems
