import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Search from '../components/search/Search'
import Hotel from '../components/hotel/Hotel'

const Hotels = () => {
  return (
    <div>
        <NavBar/>
        <Search holder="hotel"/>
        <Hotel/>
    </div>
  )
}

export default Hotels