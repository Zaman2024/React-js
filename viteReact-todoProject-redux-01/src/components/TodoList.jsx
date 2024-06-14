import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleInputform } from "../feature/todo/todoSlice";



const TodoList = (todo) => {
  // const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
 
  return (
        <div 
         className="flex justify-between items-center"
        >
           <div className="text-white">
            <h1>{ todo.text}</h1>
           </div>
           <div >
           <button
                  onClick={() => dispatch(toggleInputform({
                        id: todo.id,
                        text: todo.text,
                      })
                    )
                  }
                  className={`px-4 py-1 mr-2 rounded ${
                    toggleInputform ? "bg-blue-700" : "bg-green-700"
                  }`}
                >
                  Edit
                </button>

           <button onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 px-4 py-1 focus:outline-none hover:bg-red-600 rounded text-md"
           >X</button>
           </div>

        </div>
  );
}

export default TodoList;
