import React from 'react'
import { createContext } from 'react'

const TodoContext = createContext({
    Todos : [
        {
            id: 1,
            title : 'Todo Msg',
            complete : false,
        }
    ],
    addTodo : (title) => {},
    updateTodo : (id, title) => {},
    deleteTodo : (id) => {}
})

export default TodoContext
