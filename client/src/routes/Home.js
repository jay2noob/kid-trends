import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <div stlye={{ background: theme.bgColor, color: theme.txtColor }}>
      <Navbar />
      Hello from Home route
    </div>
  )
}

export default Home
