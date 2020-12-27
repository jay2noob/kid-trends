import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Navbar from '../components/Navbar/Navbar'
import ThemeToggle from '../components/ThemeToggle'

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <div stlye={{ background: theme.bgColor, color: theme.txtColor }}>
      <Navbar />
      <ThemeToggle />
      Hello from Home route
    </div>
  )
}

export default Home
