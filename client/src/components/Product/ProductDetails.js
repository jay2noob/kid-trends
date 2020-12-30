import React from 'react'

const ProductDetails = ({ product }) => {
  return (
    <div className="product__details-item-details">
      <h2 className='product__details-name'>{product.name}</h2>
      <h4 className='product__details-price'>Price: ${product.price}</h4>
      <p className='product__details-desc'>Description: {product.description}</p>
    </div>
  )
}

export default ProductDetails
