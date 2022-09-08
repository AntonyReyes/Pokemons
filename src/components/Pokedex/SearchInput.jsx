import React from 'react'

const SearchInput = ({setPokeSearch, setOptionType}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }

  return (
    <form className='welcomeForm' onSubmit={handleSubmit}>
      <input className='welcomeForm__input' id='searchText' type="text" placeholder='Search a pokemon' />
      <button className='welcomeForm__btn'>Search</button>
    </form>
  )
}

export default SearchInput