import React, {useState} from 'react'
import { useTodo } from '../ContextAPI/TodoContext'

function TodoItems({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()



const editTodo = () =>{
  updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
}

const toggleCompleted = () => {

  toggleComplete(todo.id)
}

// const saveBtn = () => {
//   const Btn = Document.getElementById('Btn')
//   Btn.innerHTML = 'Save'
// }


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
        onChange={toggleCompleted}
       />

      <input 
        type='text'
        value={todoMsg}
        onChange={(e) =>setTodoMsg(e.target.value)}
        readOnly = {!isTodoEditable}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-1" : "border-transparent"
      } ${todo.completed ? "line-through" : ""}`}
        />

        <button onClick={() => {
          
          if (todo.completed) return;
          if(isTodoEditable) {
            editTodo();
          }else setIsTodoEditable((prev) => !prev)
        }} 
        disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
          
        </button>
        <button onClick={() => deleteTodo(todo.id)} 
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
          ❌
        </button>
    </div>
  )
}

export default TodoItems
