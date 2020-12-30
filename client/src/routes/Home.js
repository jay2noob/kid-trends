import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'
import Products from '../components/Product/Products'

const Home = () => {
  const { isLightTheme } = useContext(ThemeContext) 

  return (
    <div className={isLightTheme ? 'light' : 'dark'}>
      <Navbar />
      <main className='container'>
      <SearchBar />
        <h1 className='mb-large text-center'>Latest Products</h1>
        <Products />
      </main>
    </div>

  )
}

export default Home
