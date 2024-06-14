import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleInputform } from "../feature/todo/todoSlice";



const TodoList = (props) => {
  const dispatch = useDispatch()
 
  return (
        <div 
         className="flex justify-between items-center"
        >
           <div className="text-white">
            <h1>{ props.text}</h1>
           </div>
           <div >
           <button
                  onClick={() => dispatch(toggleInputform({
                        id: props.id,
                        text: props.text,
                      })
                    )
                  }
                  className={`px-4 py-1 mr-2 rounded ${
                    toggleInputform ? "bg-blue-700" : "bg-green-700"
                  }`}
                >
                  Edit
                </button>

           <button onClick={() => dispatch(removeTodo(props.id))}
            className="text-white bg-red-500 border-0 px-4 py-1 focus:outline-none hover:bg-red-600 rounded text-md"
           >X</button>
           </div>

        </div>
  );
}

export default TodoList;
