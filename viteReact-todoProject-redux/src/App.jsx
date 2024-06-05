import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function App() {

  return (

      <Provider store={store}>

        <TodoForm/>
        <TodoList/>
      </Provider>
      

  )
}

export default App
