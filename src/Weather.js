import React from "react";
import './Weather.css'
import WeatherDay from './WeatherDay';

class Weather extends React.Component{
  render(){
    return(
      <>
      {this.props.weather.map((day, idx)=> (
        <WeatherDay idx={idx} date={day.date} description={day.description} />
      ))}
      </>
    )
  }
}

export default Weather;