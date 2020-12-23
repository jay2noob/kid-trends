import React, { useState, createContext } from 'react'

// creating a Product Context to use throughout the application 
export const ProductsContext = createContext()

// create a context provider to wrap the entire application 
const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  // pass the previous state (products, loading) and new state (setProducts, setLoading) to the context provider
  return (
    <ProductsContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider