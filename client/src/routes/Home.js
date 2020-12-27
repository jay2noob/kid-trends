import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Header from '../components/Header'
import ThemeToggle from '../components/ThemeToggle'

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <div stlye={{ background: theme.bgColor, color: theme.txtColor }}>
      <Header />
      <ThemeToggle />
      Hello from Home route
    </div>
  )
}

export default Home
