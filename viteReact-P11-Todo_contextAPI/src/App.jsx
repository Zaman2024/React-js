import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <input type='text'
        value={''}
        placeholder='Todo'
        onChange={''}
        />
        <button className='bg-blue-500 text-white' onClick={''}>add</button>
      </div>
      
    </>
  )
}

export default App
