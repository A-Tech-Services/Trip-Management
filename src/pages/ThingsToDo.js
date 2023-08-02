import React from 'react'
import NavBar from '../components/navbar/NavBar';
import Search from '../components/search/Search';
import ThingsToDos from '../components/thingstodo/ThingsToDo';

const ThingsToDo = () => {
  return (
    <div>
    <NavBar/>
    <Search holder="attraction"/>
    <ThingsToDos/>
</div>
  )
}

export default ThingsToDo