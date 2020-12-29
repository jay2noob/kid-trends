import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { ThemeContext } from '../../contexts/ThemeContext'
import Login from './Login'
import ThemeToggle from './ThemeToggle'
import ShopCart from './ShopCart'
import Search from './Search'
import './Navbar.css'

const Navbar = () => {
  const { isLightTheme } = useContext(ThemeContext) 

  return (
    <header>
      <nav className={isLightTheme ? 'navbar light' : 'navbar dark'}>
        <div className='navbar__brand-logo'>
          <Link 
            to='/' 
            className='navbar__link navbar__brand-name'
          >
            Hello from the header component
          </Link>
        </div>   
        <ul className="navbar__list">
          <Search />
          <li className='navbar__list-item navbar__list-item--active'>
            <Link 
              to='/shop' 
              className='navbar__link'

            >
              Shop
            </Link> 
          </li>
          <li className='navbar__list-item'>
            <ShopCart />
          </li>
          <li className='navbar__list-item'>
            <Login />
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
