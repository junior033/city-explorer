import React from "react";
import './Weather.css'
import {Card} from 'react-bootstrap';

class Weather extends React.Component{
  render(){
    return(
      <>
      {this.props.weather.map((day, idx)=> (
      <Card key={idx} className='dayCard'>
        <Card.Body>
          <Card.Title> {day.date} </Card.Title>
          <Card.Text> {day.description} </Card.Text>
        </Card.Body>
      </Card>
      ))}
      </>
    )
  }
}

export default Weather;