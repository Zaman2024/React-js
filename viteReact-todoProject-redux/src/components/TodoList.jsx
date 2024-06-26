import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";
import { toggleInputForm } from "../feature/todo/todoSlice";
import TodoForm from "./TodoForm";
import UpdateForm from "./UpdateForm";


function TodoList() {
  const todos = useSelector((state) => state.todos);
  // const toggleForm = useSelector((state) => state.todos.toggleForm)
  const dispatch = useDispatch();


  const editTodo = (todo) => {
    // updateTodo(todos.id, { ...todos, todo: todoMsg });
    const myUpdate = updateTodo({...todo,item: action.payload.item,});

  };
 
  return (
    <>
    


      <ul 
      className="flex flex-col gap-2 border bg-slate-600 border-black/50 rounded-lg mx-60 px-3 py-1.5 shadow-sm shadow-white/50 duration-300  text-black list-none text-white">
        
       {todos.map((todo) => (
        <li className="mt-3 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" 
        key={todo.id}>
           { todo.text}
           

           <div className='flex float-right gap-2 '>
            <button 
              onClick={(e) => dispatch (toggleInputForm(todo.id))}

            >
              Edit
            </button>

           <button onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
           >X</button>
           </div>

        </li>
       ))}

        
      </ul>
    </>
  );
}

export default TodoList;
