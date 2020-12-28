import React, { useState, createContext } from 'react'

// creating a Product Context to use throughout the application 
export const ThemeContext = createContext()

// create a context provder to wrap the entire application 
const ThemeContextProvider = (props) => {
  const [theme , setTheme] = useState({
    isLightTheme: true,
    light: {
      txtColor: "#373737",
      uiPrimary: "#1e9494",
      uiSecondary: "#da7f41",
      uiError: "#c73237",
      bgColor: "#e7e7e7"
    },
    dark: {
      txtColor: "#dddddd",
      uiPrimary: "#56B4B7",
      uiSecondary: "#EA9A4A",
      uiError: "#c73237",
      bgColor: "#121212"
    } 
  })

  const toggleTheme = () => {
    setTheme({...theme, isLightTheme: !theme.isLightTheme })
  }

  // pass the previous state (theme) and new state (setTheme) to the context provider
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider