import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from '../../contexts/ThemeContext'

// import NavbarItems from './NavbarItems'
import './Navbar.css'

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext) 
  const theme = isLightTheme ? light : dark

  return (
    <nav className='navbar' style={{ background: theme.bgColor, color: theme.txtColor }}>
      <div className='navbar__brand-logo'>
        <Link to='/' className='navbar__brand-name'>
          Hello from the header component
        </Link>
      </div>   
      <ul className="navbar__list">
        <li className='navbar__list-item navbar__list-item--active'>
          <Link to='/shop'>
            Shop
          </Link> 
        </li>
        <li className='navbar__list-item'>
          <Link to='/cart' className='navbar__shopping-cart'>
            <i className="far fa-shopping-cart"></i>
            <span className='navbar__shopping-cart--counter'>0</span>
          </Link> 
        </li>
        <li className='navbar__list-item'>
          <Link to='/signin'>
            <button>Sign in</button>
          </Link> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
