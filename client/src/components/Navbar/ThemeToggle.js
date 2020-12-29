import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <>
      <button
        onClick={toggleTheme}
        className='btn__theme-toggle'
        style={{ background: theme.bgColor, color: theme.txtColor }}
        >
          {theme === light ? <i className="fal fa-moon-stars"></i> : <i className="fal fa-sun"></i>}
      </button>
    </>

  )
}

export default ThemeToggle
