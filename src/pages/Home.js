import React from 'react';
import Search from '../components/search/Search'
import NavBar from '../components/navbar/NavBar';
import Welcome from '../components/welcome/Welcome';

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Search holder="your search"/>
        <Welcome/>
    </div>
  )
}

export default Home