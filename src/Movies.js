import React from "react";
import {Card} from 'react-bootstrap';
import CityMovies from "./CityMovies";

class Movies extends React.Component{
  render(){
    return(
      <>
      {this.props.movies.map((movie, idx)=> (
        <CityMovies idx={idx} title={movie.title} description={movie.description} />
      ))}
      </>
    )
  }
}

export default Movies;