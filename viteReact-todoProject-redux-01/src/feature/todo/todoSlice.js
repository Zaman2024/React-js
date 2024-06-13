import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: nanoid(), text: "Hello World" },
    { id: nanoid(), text: "Zaman" },
  ],
  toggleForm: true,
  todoUpdate: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearTodos: (state) => {
      state.todos = [];
    },
    toggleInputform: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = {...state.todoUpdate, ...action.payload}
    },
    todoUpdated : (state, action) => {
      const todoMotified = state.todos.find((todo)=> todo.id === action.payload.id);
      todoMotified.text = action.payload.text;
      state.toggleForm = !state.toggleForm;

    }
  },
});
export const { addTodo, removeTodo, clearTodos, toggleInputform, todoUpdated } = todoSlice.actions;
export default todoSlice.reducer;
