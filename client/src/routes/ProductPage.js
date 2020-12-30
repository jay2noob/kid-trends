import React from 'react'
import { Link } from "react-router-dom"

import products from '../data/products'
import '../index.css'

const ProductPage = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)
  console.log(product)

  return (
    <main className='container'>
      <Link to='/' className='btn__go-back'>
        Go back
      </Link>

      <section className="product__details">
        <div className="product__details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product__details-item">
          <h2 className='product__details-item--name'>{product.name}</h2>
          <h4 className='product__details-item--price'>Price: ${product.price}</h4>
          <p className='product__details-item--desc'>Description: {product.description}</p>
        </div>

        <div className="product__cart">
          <div className="product__cart-price">
            <h4>Price:</h4>
            <h4>${product.price}</h4>
          </div>
          <div className="product__cart-status">
            <h4>Status:</h4>
            <h4>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</h4>
          </div>
          <div className="product__cart-add">
            <button className='product__cart-btn'>Add To Cart</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
