import React from 'react';
import Header from './components';
import './default.scss';
import Weather from './components/weather'
import Form from './components/form'

const API_KEY = '4030a527b2d74a47a49a50615b8d7504';


class App extends React.Component {
  state = { 
    temperature: undefined,
    feelslike: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch
    (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
          this.setState( {
            temperature: data.main.temp,
            feelslike: data.main.feels_like,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "",
    })
    }
    else {
      this.setState( {
        temperature: undefined,
        feelslike: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Location not found. Please try again."
      }
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getWeather = {this.getWeather}/>
        <Weather 
        temperature = {this.state.temperature}
        feelslike = {this.state.feelslike}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        />
        
      </div>
    );
  }
}

export default App;
