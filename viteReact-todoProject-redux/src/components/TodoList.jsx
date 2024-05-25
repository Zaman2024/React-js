import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'
import { updateTodo } from '../feature/todo/todoSlice'

function TodoList({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
       <div  className='flex flex-col border bg-slate-600 border-black/50 rounded-lg mx-60 px-3 py-1.5 shadow-sm shadow-white/50 duration-300  text-black list-none'>
       {todos.map((todo) => (
        <li key={todo.id}>
           { todo.text}

           <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (isTodoEditable) {
                      updateTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>

           <button onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
           >X</button>

        </li>
       ))}
      </div> 
    </>
  )
}

export default TodoList
