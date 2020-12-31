import React from 'react'

import SearchBar from '../components/SearchBar/SearchBar'
import Products from '../components/Product/Products'

const HomePage = () => {

  return (
    <div>
      <main className='container'>
      <SearchBar />
        <h1 className='mb-large text-center'>Latest Products</h1>
        <Products />
      </main>
    </div>

  )
}

export default HomePage
