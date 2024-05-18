import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id : 1,
            text : 'Hello World'
        }
    ]
}

export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers : {
        addTodo :( state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo : (state, action) => {
            state.todos = state.todos.map((Todo) => (Todo.id === action.payload ? text : Todo))
        }
    }
})