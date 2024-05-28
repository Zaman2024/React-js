import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";
import { updateTodo } from "../feature/todo/todoSlice";

function TodoList() {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editTodo = () => {
    updateTodo(todos.id, { ...todos, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 border bg-slate-600 border-black/50 rounded-lg mx-60 px-3 py-1.5 shadow-sm shadow-white/50 duration-300  text-black list-none text-white">
        
       {todos.map((todo) => (
        <li key={todo.id}>
           { todo.text}

           <div className='flex float-right gap-2 '>
            <button onClick={() => updateTodo}
            >
              Edit
            </button>
           <button onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
           >X</button>
           </div>

        </li>
       ))}

        
      </div>
    </>
  );
}

export default TodoList;
