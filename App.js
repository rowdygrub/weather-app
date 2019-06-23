

import React from 'react';
import Titles from "./components/titles";
import Form from "./components/form"
import Weather from "./components/weather"
import Demo from "./components/geolocation"
import './App.css';

const API_KEY = "c9182ddba1ebf73e2df04aa63c3e36bb";
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("geolocation is not supported");
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude);
   

}
console.log(getLocation());

class App extends React.Component {
  // TODO: add high and low temps, geolocation, add icons for each day conditions, restyle 
  state = {
    unit: "kelvin",
    date: undefined,
    temperature: undefined,
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
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`);

    // api return parse to json format
    const data = await api_call.json();

    console.log(data);

    if(city && country){
      // get the 5 day list of data
      const tempList = [data.list[1].main.temp, data.list[9].main.temp, data.list[17].main.temp, data.list[25].main.temp, data.list[33].main.temp];
      const humidityList = [data.list[1].main.humidity, data.list[9].main.humidity, data.list[17].main.humidity, data.list[25].main.humidity, data.list[33].main.humidity];
      const descriptionList = [data.list[1].weather[0].description, data.list[9].weather[0].description, data.list[17].weather[0].description, data.list[25].weather[0].description, data.list[33].weather[0].description];
      const dateList = [data.list[1].dt_txt, data.list[9].dt_txt, data.list[17].dt_txt, data.list[25].dt_txt, data.list[33].dt_txt];

      this.setState({
        lat: "",
        long: "",
        date: dateList,
        temperature:  tempList,
        city: data.city.name,
        country: data.city.country,
        humidity: humidityList,
        description: descriptionList,
        error: ""
        
      });

      // convert the temperature before displaying
      if(this.state.unit === "celsius"){
        var tmp = this.state.temperature - 273.15 ;
        this.setState({
          temperature: tmp
        });
      }
      if(this.state.unit === "fahrenheit"){
        tmp = (this.state.temperature - 273.15 ) *  9/5 + 32;
        this.setState({
          temperature: tmp
        });
      }
      
    }
    else{
      this.setState({
        unit: "kelvin",
        date: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "No City or Country Entered"
      });
      
    }

    
  }

  handleUnitChange = (e) => {
    const event = e.target.value;
    // if new event 
    // then do something to the old state
    // else set the state to new unit button
    if(this.state.city && this.state.country){
      if(event === "celsius" && this.state.unit === "kelvin"){
        //0K − 273.15 = -273.1°C
        // k to c
        var tmp = this.state.temperature - 273.15 ;
        this.setState({
          temperature: tmp
        });
        
      }
      else if(event === "fahrenheit" && this.state.unit === "kelvin"){
        // (0K − 273.15) × 9/5 + 32 = -459.7°F
        // k to f
        tmp = (this.state.temperature - 273.15 ) *  9/5 + 32;
        this.setState({
          temperature: tmp
        });
      }
      else if(event === "kelvin" && this.state.unit === "fahrenheit"){
        // f to k
        tmp = (this.state.temperature - 32 ) *  5/9 + 273.15;
        this.setState({
          temperature: tmp
        });
      }
      else if(event === "kelvin" && this.state.unit === "celsius"){
        // c to k
        tmp = this.state.temperature + 273.15 ;
        this.setState({
          temperature: tmp
        });
      }
      else if(event === "fahrenheit" && this.state.unit === "celsius"){
        // c to f
        // (0°C × 9/5) + 32 = 32°F
  
        tmp = (this.state.temperature * 9/5) + 32 ;
        this.setState({
          temperature: tmp
        });
      }
      else if(event === "celsius" && this.state.unit === "fahrenheit"){
        // f to c
        // (32°F − 32) × 5/9 = 0°C
        tmp = (this.state.temperature - 32) * 5/9;
        this.setState({
          temperature: tmp
        });
      }
    }
 
    this.setState({
      unit: event
    });

    console.log("Handle button");
  }
  
  // container-fluid is for all devices. flexible
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">

                <div className="col-4 title-container">
                  <Titles/>
                                                                 
                </div> 
                
                <div className="col-8 form-container">
                  <Demo/>
                  <Form getWeather={this.getWeather} handleUnitChange={this.handleUnitChange}/>
                  <Weather 
                  date={this.state.date}
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  unit={this.state.unit}
                  
                  />
                  
                  
                </div>
                
              </div>
 
            </div>
          </div>
        </div>   
      </div>
    );
  }
}

export default App;
