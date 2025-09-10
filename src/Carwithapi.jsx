import React, { useState, useEffect } from 'react';
import axios from 'axios';

const  Carwithapi=()=> {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=ff8166a')

      .then(response => {
        console.log(response.data.Title);
        setmovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    
    

    <div className="card" style={{width: "18rem;", height:"20rem"}}>
  <img src={movie.Poster} style={{width: "18rem;", height:"20rem"}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Movie Title:{movie.Title}</h5>
    <p className="card-text">Plot:{movie.Plot}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{movie.Year}</li>
    <li className="list-group-item">{movie.Genre}</li>
    <li className="list-group-item">{movie.Released}</li>
  </ul>
  <div className="card-body">
    
    <a href="#" class="card-link">View Detail</a>
  </div>
</div>
    
    
   
  );
}

export default Carwithapi;