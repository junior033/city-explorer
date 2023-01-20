import React from "react";
import {Card} from 'react-bootstrap';

class CityMovies extends React.Component{
  render(){
    return(
      <>
      <Card key={this.props.idx} className='dayCard'>
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Text> {this.props.description} </Card.Text>
        </Card.Body>
      </Card>
      </>
    )
  }
}

export default CityMovies;