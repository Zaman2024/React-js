import React, {createContext, useContext } from 'react'


export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            title : 'Todo Msg',
            complete : false,
        }
    ],
    addTodo : (title) => {},
    updateTodo : (id, title) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
