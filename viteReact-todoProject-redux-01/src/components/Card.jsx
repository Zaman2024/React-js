import React from "react";
import { removeTodo } from "../feature/todo/todoSlice";
import TodoForm from "./TodoForm";
import UpdateForm from "./UpdateForm";
import { useSelector, useDispatch } from "react-redux";

function Card() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    console.log(todos)
  return (
    <div className="bg-slate-700  mx-60 p-5 rounded-xl border-4 border-white/50">
      <div>
        <h1 className="text-white">Zaman</h1>
        <TodoForm />
        {/* <UpdateForm/> */}
      </div>
      <div>
        {/* <TodoList/> */}
        <ul 
      className="flex flex-col gap-2 border bg-slate-600 border-black/50 rounded-lg px-1 py-0.5 shadow-sm shadow-white/50 duration-200  text-black list-none text-white">
        
       {todos.map((todo) => (
        <li className="mt-0.5 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white" 
        key={todo.id}>
           { todo.text}
           

           <div className='flex float-right gap-2 '>
            <button 

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
      </div>
      <button className="bg-purple-700 text-white text-2xl px-3 py-1 rounded-xl mt-16 ">
        Clear
      </button>
    </div>
  );
}

export default Card;
