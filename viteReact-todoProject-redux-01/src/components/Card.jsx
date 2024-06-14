import React from "react";
import { clearTodos,  } from "../feature/todo/todoSlice";
import TodoForm from "../components/TodoForm";
import UpdateForm from "../components/UpdateForm";
import TodoList from "../components/TodoList";
import { useSelector, useDispatch } from "react-redux";

//----- For second mathod ----------
// import { removeTodo, todoUpdated, toggleInputform } from "../feature/todo/todoSlice"; 

function Card() {
  const todos = useSelector((state) => state.todos);
  const toggleForm = useSelector((state) => state.toggleForm);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <div className="bg-slate-700  mx-60 p-5 rounded-xl border-4 border-white/50">
      <div>
        <h1 className="text-white text-2xl font-semibold underline">Todo Project</h1>
        {toggleForm ? <TodoForm /> : <UpdateForm />}
      </div>
      <ul
      >
        
       {todos.map((todo) => (
        <li className="w-full mt-3  bg-purple-800 px-4 py-2 rounded-xl text-white text-lg" 
        key={todo.id}>


           <TodoList id={todo.id} text={todo.text}/>

        </li>
       ))}

        
      </ul>

      {/* ----- For second mathod ---------- */}
      {/* <div>
        <ul className="flex flex-col gap-2 border bg-slate-600 border-black/50 rounded-lg px-1 py-0.5 shadow-sm shadow-white/50 duration-200  text-black list-none text-white">
          {todos.map((todo) => (
            <li
              className="mt-0.5 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
              key={todo.id}
            >
              {todo.text}

              <div className="flex float-right gap-2 ">
                <button
                  onClick={() =>
                    dispatch(
                      toggleInputform({
                        id: todo.id,
                        text: todo.text,
                      })
                    )
                  }
                  className={`px-4 py-2 rounded ${
                    toggleInputform ? "bg-blue-700" : "bg-green-700"
                  }`}
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <button
        className="bg-indigo-700 text-white text-2xl px-3 py-0.5 rounded-xl mt-16 border-1 border-slate-500 outline-2"
        onClick={() => dispatch(clearTodos())}
      >
        Clear
      </button>
    </div>
  );
}

export default Card;
