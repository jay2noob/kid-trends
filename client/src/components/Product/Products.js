import React from 'react'

import products from '../../data/products'
import Product from './Product'
import './Products.css'

const Products = () => {
  return (
    <div className="products">
      {products.map(product => (
        <Product product={product}/>
      ))}
    </div>
  )
}

export default Products
