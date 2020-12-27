import React from 'react'
import { Link } from "react-router-dom";

const NavbarItems = () => {
  return (
    <>
      <li className='navbar__list-item navbar__list-item--active'>
        <Link to='/shop'>
          Shop
        </Link> 
      </li>
      <li className='navbar__list-item navbar__list-item--active'>
        <Link to='/cart'>
          <i className="far fa-shopping-cart"></i>
        </Link> 
      </li>
    </>
  )
}

export default NavbarItems
