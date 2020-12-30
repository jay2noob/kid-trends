import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Layout = (props) => {
  const { isLightTheme } = useContext(ThemeContext) 

  isLightTheme ? document.body.classList.add('light') : document.body.classList.add('dark')
  isLightTheme ? document.body.classList.remove('dark') : document.body.classList.remove('light')

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Layout
