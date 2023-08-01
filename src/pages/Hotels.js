import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Search from '../components/search/Search'

const Hotels = () => {
  return (
    <div>
        <NavBar/>
        <Search holder="hotel"/>
    </div>
  )
}

export default Hotels