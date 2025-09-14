import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "./Card.json";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Carwithapi=()=> {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?s="love"&y=2024&type=movie&apikey=ff8166a')

      .then(response => {
             
       setmovie(response.data.Search );
       
      })
      .catch(error => {
        console.error(error);
      });
       
       
  }, []);
 
return (
  <div className="container">
    <div className="row">
      {movie.map((mv, index) => (
        <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
          <div className="card h-100 d-flex flex-column">
            <img className="card-img-top" src={mv.Poster} alt={mv.Title} />
            
            <div className="card-body d-flex flex-column">
              <h4 className="card-title">Title:{mv.Title}</h4>
              <p className="card-text">Release Year: {mv.Year}</p>

             
              <div className="mt-auto">
                <a href="#" className="btn btn-primary w-100">
                  Show Details
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);



}

export default Carwithapi;