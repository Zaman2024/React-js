import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {id : 1, text : 'Hello World'}
    ],
    toggleForm: true,
    todoUpdate: {},
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
            state.todos.push(todo);
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        toggleInputForm :(state, action) => {
            state.toggleForm = ! state.toggleForm ;
            state.todoUpdate = {...state.todoUpdate, ...action.payload};
        }



        // updateTodo : (state, action) => {
        //     state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload.id)
            
        // },

        // updateTodo: (state, action) => {
        //     return state.map((todo) => {
        //       if (todo.id === action.payload.id) {
        //         return {...todo, item: action.payload.item,};
        //       }
        //         return todo;
        //     });
        //   },
    }
})

export const {addTodo, removeTodo, toggleInputForm } = todoSlice.actions

export const todoReducer = todoSlice.reducer