import React, { useContext } from 'react'

export const ThemeContext = React.createContext({
    themeMode:'light',
    lightMode : ()=> {},
    darkMode : ()=> {},
})

export const ThemeProvider = ThemeContext.Provider

export default useTheme = ()=>{
  return useContext(ThemeContext)
}
