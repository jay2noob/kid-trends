import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { ThemeContext } from '../../contexts/ThemeContext'
import AuthButon from './AuthButton'
import ThemeToggle from './ThemeToggle'
import ShopCart from './ShopCart'
import './Navbar.css'

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <header>
      <nav className='navbar' style={{ background: theme.bgColor, color: theme.txtColor }}>
        <div className='navbar__brand-logo'>
          <Link 
            to='/' 
            className='navbar__link navbar__brand-name'
            style={{ color: theme.txtColor }}
          >
            Hello from the header component
          </Link>
        </div>   
        <ul className="navbar__list">
          <li className='navbar__list-item navbar__list-item--active'>
            <Link 
              to='/shop' 
              className='navbar__link'
              style={{ color: theme.txtColor }}
            >
              Shop
            </Link> 
          </li>
          <form action=''>
            <input 
              type='search' 
              name='searchTerm' 
              placeholder='Search'
            >
              </input>
          </form>
          <li className='navbar__list-item'>
            <ShopCart />
          </li>
          <li className='navbar__list-item'>
            <AuthButon />
          </li>
          <li className='navbar__list-item'>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
