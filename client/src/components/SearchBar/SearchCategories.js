import React from 'react'

import './SearchCategories.css'

const SearchCategories = () => {
  return (
    <select className="search__select" id="category">
      <option defaultValue="">All Categories</option>
      <option value="School Supplies">School Supplies</option>
      <option value="Shoes">Shoes</option>
      <option value="Personal Hygiene">Personal Hygiene</option>
      <option value="Professional Outfits">Professional Outfits</option>
      <option value="Winter Clothes">Winter Clothes</option>
      <option value="Miscellaneous">Miscellaneous</option>
    </select>
  )
}

export default SearchCategories
