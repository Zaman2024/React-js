import React, { useState } from "react";
import { useTodo } from "../ContextAPI/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState('')
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo, completed: false})
    setTodo("")
  }

  return (
    <form onSubmit={add}>
      <div className="flex justify-center items-center mx-20">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Write Todos" className="w-full p-2 rounded-s-lg outline-none bg-white/70" />

        <button id="Btn" type="Submit" className="bg-green-700 text-white p-2 rounded-e-lg" >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
