import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { ThemeContext } from '../../contexts/ThemeContext'
import './ShopCart.css'

const ShopCart = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <>
      <Link 
        to='/cart' 
        className='navbar__link navbar__shopping-cart'
        style={{ color: theme.txtColor }}
      >
        <i className="far fa-shopping-cart"></i>
        <span 
          className='navbar__shopping-cart--counter'
          style={{ background: theme.uiSecondary, color: theme.txtColor }}
        >
          0
        </span>
      </Link> 
    </>
  )
}

export default ShopCart
