import React from "react";
import './Movie.css'
import {Card} from 'react-bootstrap';

class Movies extends React.Component{
  render(){
    return(
      <>
      {this.props.movies.map((movie, idx)=> (
      <Card key={idx} className='dayCard'>
        <Card.Body>
          <Card.Title> {movie.title} </Card.Title>
          <Card.Text> {movie.description} </Card.Text>
        </Card.Body>
      </Card>
      ))}
      </>
    )
  }
}

export default Movies;