import React, { useState, createContext } from 'react'

// creating a Product Context to use throughout the application 
export const ShopContext = createContext()

// create a context provider to wrap the entire application 
const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  // pass the previous state (products, loading) and new state (setProducts, setLoading) to the context provider
  return (
    <ShopContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider