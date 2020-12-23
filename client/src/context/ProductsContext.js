import React, { useState, createContext } from 'react'

// creating a Product Context to use throughout the application 
export const ProductsContext = createContext()

// Create a context provder to wrap the entire application 
const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  // pass the previous state (products, loading) and new state (setProducts, setLoading) to the context provider
  return (
    <ProductsContextProvider value={ products, setProducts, loading, setLoading }>
      {props.children}
    </ProductsContextProvider>
  )
}

export default ProductsContextProvider