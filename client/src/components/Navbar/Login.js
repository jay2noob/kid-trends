import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { ThemeContext } from '../../contexts/ThemeContext'
import './Login.css'

const Login = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <>
      <Link to='/login' className='navbar__link' style={{ background: theme.uiPrimary, color: theme.txtColor }}>
        <i className="fal fa-user"></i>
        <span className='btn__auth-text'>Sign in</span>
      </Link> 
    </>
  )
}

export default Login
