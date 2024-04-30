import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

const lightMode = () =>{
    setThemeMode('light')
  }
const darkMode = () =>{
    setThemeMode('dark')
  }
  // --actual change in theme---

  useEffect(() => {
    // const cardTheme = document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <div>
        <ThemeBtn />
      </div>
      <div>
        <Card />
      </div>
      
    </ThemeProvider>
  )
}

export default App
