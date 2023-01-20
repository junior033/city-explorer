import React from "react";
import './Weather.css'
import {Card} from 'react-bootstrap';


class WeatherDay extends React.Component{
  render(){
    return(
      <>
      <Card key={this.props.idx} className='dayCard'>
        <Card.Body>
          <Card.Title> {this.props.date} </Card.Title>
          <Card.Text> {this.props.description} </Card.Text>
        </Card.Body>
      </Card>
      </>
    )
  }
}

export default WeatherDay;