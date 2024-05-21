import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import TodoForm from './components/TodoForm'

function App() {

  return (

      <Provider store={store}>
        <TodoForm/>
      </Provider>
      

  )
}

export default App
