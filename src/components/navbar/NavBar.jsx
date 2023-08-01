import { Link } from "react-router-dom";
import "./NavBar.css";

import React from 'react'

const NavBar = () => {
  return (
    <div className="nav-bar">
            <div className="logo">
                <h2><i class="fa-solid fa-car"></i> A-Trip</h2>
            </div>

            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hotel">Hotels</Link></li>
                <li><Link to="/attraction">Things To Do</Link></li>
                <li><Link to="/restaurants">Restaurants</Link></li>
            </ul>

            <div className="homeBtn">
                <Link to='login'>Login</Link>
                <Link to='signup'>Sign Up</Link>
            </div>
    </div>
  )
}

export default NavBar