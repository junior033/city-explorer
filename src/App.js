import './App.css';
import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Weather from './Weather';
import Movies from './Movies';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      citymap: '',
      lat: '',
      long: '',
      displayName: '',
      weatherData: [],
      movieData: []
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }


  handleGetWeather = async (lat, lon) => {

    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`
      let weatherDataFromAxios = await axios.get(url);

      this.setState({
        weatherData: weatherDataFromAxios.data
      })

      console.log('WEATHER:: ', weatherDataFromAxios.data);
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  getMovies = async (city) => {

    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?&query=${city}`;
      let movieDataFromAxios = await axios.get(url);

      this.setState({
        movieData: movieDataFromAxios.data
      })
      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }


  getCityData = async (e) => {
    e.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityDataFromAxios = await axios.get(url);
      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;

      this.handleGetWeather(lat, lon);
      this.getMovies(this.state.city);

      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        lat: cityDataFromAxios.data[0].lat,
        long: cityDataFromAxios.data[0].lon,
        displayName: cityDataFromAxios.data[0].display_name,
        citymap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=10&size=800x800`
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  render() {
    console.log(this.state.weatherData.description);
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getCityData}>
          <label htmlFor=''> Pick a City
            <input type='text' onInput={this.handleInput} />
            <button type='submit'>Explore  </button>
          </label>
        </form>
        {this.state.error ?
          <Card>
            <Card.Title>{this.state.errorMessage}</Card.Title>
          </Card>
          : <Card>
            <Card.Title>{this.state.displayName}</Card.Title>
            <Card.Img src={this.state.citymap} />
          </Card>
        }
        <Weather weather={this.state.weatherData} />
        <Movies movies={this.state.movieData} />
      </>
    )
  };
}

export default App;
