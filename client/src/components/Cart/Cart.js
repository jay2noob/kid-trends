import React from 'react'

import CartTotal from './CartTotal'
import './Cart.css'

const Cart = () => {
  return (
    <div className='container'>
      <div className="cart__heading">
        <h1>Your Cart</h1>
      </div>
      <div className='cart'>
        <div className="cart__image">
          <img src="" alt=""/>
        </div>
        <div className="cart__name">
          <p></p>
        </div>
        <div className="cart__price">
          <p></p>
        </div>
        <div className="cart__quantity">
          <select name="" id="">
            <option value="">1</option>
          </select>
        </div>  
        <div className="cart__remove">
          <button>Remove</button>
        </div>
        <div className="cart__row-total">
          <p></p>
        </div>
      </div>
      <CartTotal />
    </div>
  )
}

export default Cart
