import { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [{ id: Date.now(), ...title }, ...prev]);
  };

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((prevTitle) => (prevTodo.id === id ? title : prevTitle))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  };

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div>
        <div>
          <TodoForm />
        </div>
        <div>
          {/*Loop and add todo items here*/}
          {todos.map((todo) => (
            <div key ={todo.id}
            >
              <TodoItems/>
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
