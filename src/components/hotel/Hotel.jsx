import "./Hotel.css";
import React, {useState, useEffect} from 'react';
import axios from "axios";

const Hotel = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();
    const [locationId, setLocationId] = useState(293918);

    const handleNext = () => {
      let newValue = locationId + 1; 
      if(newValue == 293918){
        newValue = 298916;
      }
      setLocationId(newValue);
    }

    const handlePrevious = () => {
      let newValue = locationId - 1; 
      setLocationId(newValue);
    }


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
            params: {
              location_id: locationId,
              adults: '1',
              rooms: '1',
              nights: '2',
              offset: '0',
              currency: 'USD',
              order: 'asc',
              limit: '30',
              sort: 'recommended',
              lang: 'en_US'
            },
            headers: {
              'X-RapidAPI-Key': '7b7fc55551msh75c870ab4ca9d94p1708d5jsn1233d8d9fad4',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
      
          setLoading(true);
          axios.request(options)
          .then((response) => {
            setLoading(false);
            console.log(response.data.data)
            setTodos(response.data.data)
          })
          .catch((err) => {
            console.log(err.message);
            setError(err.message);
          })
    }, [locationId]);
    
    // handling the search keyword
    const handlingSearch = () => {
        
    }


  if(error){
    return (
      <div className="error">
        <img src="https://i.gifer.com/origin/4b/4b55c3867e2fc9d86d1beb8ab2ce2a1d_w200.gif" alt="erro Image" />
        <p>Oops! An Error Occured: {error}</p>
      </div>
    )
  }else if (loading){
    return (
      <div className="loadContainer">
        <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-18.jpg" alt="loading" />
        <p>Loading...</p>
      </div>
    )
  }else{
    return (
      <div className='ttd'>
        <h1 className="head">Book Your Dream Getaway Today</h1>
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
  
                                {todo.latitude?
                                  <p><i class="fa-solid fa-location-dot" style={{color: "#000"}}></i> Latitude: {todo.latitude}</p> :
                                  <p><i class="fa-solid fa-location-dot" style={{color: "#000"}}></i> Longitude: 12.945731</p>
                                }
  
                                {todo.longitude?
                                  <p className="contact"><i class="fa-solid fa-location-dot" style={{color: "#000"}}></i> {todo.longitude}</p> :
                                  <p className="contact"><i class="fa-solid fa-location-dot" style={{color: "#000"}}></i> +12345678910</p>
                                }
  
                                {todo.timezone?
                                    <p><i class="fa-solid fa-clock" style={{color: "#000"}}></i> {todo.timezone}</p> :
                                    <p><i class="fa-solid fa-clock" style={{color: "#000"}}></i> Lorem/ipsum</p>
                                }

                                {todo.price?
                                    <p className="contact"><i class="fa-solid fa-hand-holding-dollar" style={{color: "#000"}}></i> Price: {todo.price}</p> :
                                    <p className="contact"><i class="fa-solid fa-hand-holding-dollar" style={{color: "#000"}}></i> Price: $45 - $81</p>
                                }

                                {todo.ranking?
                                  <p>Ranking: <br/>{todo.ranking}</p> : 
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Voluptatum nulla error.
                                    </p>
                                }
                            </div>
                        </div>
                  )
                })
            }
          </div>
          <div className="btnContainer">
            <i onClick={handlePrevious} class="fa-solid fa-circle-chevron-left"></i>
            <i onClick={handleNext} class="fa-solid fa-circle-chevron-right"></i>
          </div>
      </div>
    )
  }
}

export default Hotel