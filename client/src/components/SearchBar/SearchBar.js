import React from 'react'

import SearchInput from './SearchInput'
import SearchCategories from './SearchCategories'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <form className='search__form' action=''>
      <SearchCategories />
      <SearchInput />
    </form>
  )
}

export default SearchBar
