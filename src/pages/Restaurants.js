import React from 'react'
import NavBar from '../components/navbar/NavBar';
import Search from '../components/search/Search'

const Restaurants = () => {
  return (
    <div>
        <NavBar/>
        <Search holder="restaurant"/>
    </div>
  )
}

export default Restaurants