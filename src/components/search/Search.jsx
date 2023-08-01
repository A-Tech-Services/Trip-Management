import "./Search.css"
import React from 'react'

const Search = (props) => {
  return (
    <div className="input">
        <input type="text" placeholder={`Type in name of ${props.holder} here...`} />
        <button>Search</button>
    </div>
  )
}

export default Search