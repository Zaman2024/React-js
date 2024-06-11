import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert('Please Enter a Valid Input')
      setInput("");

    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w- 1/4 flex justify-center items-center m-3 w-auto">
        <input
          type="text"
          value={input}
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
          className="rounded-s-xl h-10 outline-none px-2 text-lg w-full "
        />
        <button
          type="submit"
          className=" bg-green-800 text-white p-2 rounded-e-xl"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
