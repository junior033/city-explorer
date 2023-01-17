import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      city : '',
      cityData: [],
      error: false,
      errorMessage: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
  
      let cityDataFromAxios = await axios.get(url);
      console.log(cityDataFromAxios.data);
  
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      })
      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }


  }

  render() {
    return (
      <>
      <h1> Hello</h1>
      <form onSubmit={this.getCityData}>
        <label htmlFor=''> Pick a City
        <input type='text' onInput={this.handleInput}/>
        <button type='submit'>Explore  </button>
        </label>
      </form>

      {/* <p>{this.state.cityData[0].display_name}</p> */}
      </>
    )
  };
}

export default App;
