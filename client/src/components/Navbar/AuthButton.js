import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { ThemeContext } from '../../contexts/ThemeContext'
import './AuthButton.css'

const AuthButton = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <>
      <Link to='/signin' className='navbar__link'>
        <button
          className='btn__auth'
          style={{ background: theme.uiPrimary, color: theme.txtColor }}
        >
          Sign in
        </button>
      </Link> 
    </>
  )
}

export default AuthButton
