import React, { useState, createContext } from 'react'

// creating a Product Context to use throughout the application 
export const ThemeContext = createContext()

// create a context provder to wrap the entire application 
const ThemeContextProvider = (props) => {
  const [theme , setTheme] = useState({
    isLightTheme: true,
    light: {
      txtColor: "#555",
      uiPrimary: "006E90",
      uiSecondary: "F18F01",
      bgColor: "#eee"
    },
    dark: {
      txtColor: "#ddd",
      uiPrimary: "#008DB8",
      uiSecondary: "#FEA520",
      bgColor: "#555"
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