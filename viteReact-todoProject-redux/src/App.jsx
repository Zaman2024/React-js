
import { Provider } from 'react-redux'

import './App.css'
import { store } from './Store/store'
// import {TodoForm} from '../src/components/TodoForm'

function App() {

  return (

      <Provider store={store}>
        <TodoForm/>

      </Provider>
      

  )
}

export default App
