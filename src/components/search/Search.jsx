import "./Search.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Search = (props) => {
  const [input, setInput] = useState("");


  // getting the value of our input
  const getInput = (e) => {
    e.preventDefault();
    let inputValue = e.target.value;
    setInput(inputValue);
  }




  return (
    <div className="input">
        <input type="text" value={input} onChange={getInput} placeholder={`Type in name of ${props.holder} here...`} />
        <button onClick={props.handlingSearch}>Search</button>
    </div>
  )
}

export default Search