import React from 'react'
import { Link } from "react-router-dom"

import './Product.css'

const Product = ({ product }) => {
  return (
    <div className='product'>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="a cool product"/>
      </Link>

      <Link to={`/product/${product._id}`} className='product__name'>
        {product.name}
      </Link>
      <Link to='#' className="product__category">
        {product.category}
      </Link>
      <span className='product__price'>${product.price}</span>
    </div>
  )
}

export default Product
