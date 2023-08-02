import "./ThingstoDo.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThingsToDo = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
            params: {
              location_id: '298571',
              currency: 'USD',
              lang: 'en_US',
              lunit: 'km',
              sort: 'recommended'
            },
            headers: {
              'X-RapidAPI-Key': 'c543991eccmsha9d03b5659fa628p18c9ffjsn98994b37dc17',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
      
      
          axios.request(options)
          .then((response) => {
            console.log(response.data.data)
            setTodos(response.data.data)
          })
          .catch((err) => {
            console.log(err.message);
            setError(err.message);
          })
    }, []);
    
    // handling the search keyword
    const handlingSearch = () => {
        
    }


  return (
    <div className='ttd'>
      <h1 className="head">Discover Captivating Destinations and Attractions</h1>
        <div className="ttd-container">
          {
              todos.map((todo) => {
                return(
                  <div className='container'>
                          <div className="image">
                            {todo.photo?.images?.large.url?
                              <img src={todo.photo?.images?.large.url} alt='image'/> :
                              <img src='https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/GettyImages-1160947136%20%281%29.jpg' alt='image'/>
                            }
                              
                          </div>
                          <div className="name">
                              
                              {todo.name?
                                <h1>{todo.name}</h1> :
                                <h1>Lorem ipsum dolor sit amet.</h1>
                              }
                              {todo.description?
                                <p>{todo.description}</p> : 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                                  elit. Voluptatum nulla error repellat saepe odit explicabo 
                                  enim. Fugiat amet, at ut ipsum consequatur consequuntur est 
                                  esse voluptatem dolorem quos laborum earum!
                                  </p>
                              }
                          </div>
                      </div>
                )
              })
          }
        </div>
    </div>
  )
}

export default ThingsToDo