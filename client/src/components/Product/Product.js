import React from 'react'
import { Link } from "react-router-dom"

import './Product.css'

const Product = ({ product }) => {
  return (
    <div className='product'>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="a cool product"/>
      </Link>

      <Link to={`/product/${product._id}`}>
        <h2>{product.name}</h2>
      </Link>
      <h4>{product.brand}</h4>
      <h3>${product.price}</h3>
    </div>
  )
}

export default Product
