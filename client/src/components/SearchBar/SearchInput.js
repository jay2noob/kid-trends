import React from 'react'

import './SearchInput.css'

const SearchInput = () => {
  return (
    <>
      <input 
        type='search' 
        name='searchTerm' 
        placeholder='Search'
        className='search__input'
      >
      </input>
    </>
  )
}

export default SearchInput
