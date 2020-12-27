import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <div style={{ background: theme.bgColor, color: theme.txtColor }}>
      Hello from the header component 
      <ul>
        <li style={{ background: theme.uiPrimary }}>Home</li>
        <li style={{ background: theme.uiSecondary }}>Products</li>
      </ul>
    </div>
  )
}

export default Header
