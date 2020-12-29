import React from 'react'
import { Link } from "react-router-dom"

import './Login.css'

const Login = () => {

  return (
    <>
      <Link to='/login' className='navbar__link'>
        <i className="fal fa-user"></i>
        <span className='btn__auth-text'>Sign in</span>
      </Link> 
    </>
  )
}

export default Login
