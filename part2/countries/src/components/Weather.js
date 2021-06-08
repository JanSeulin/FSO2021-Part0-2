import React, {useState} from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
    const [condition, setCondition] = useState({});
    const [available, setAvailable] = useState(false);
  
    const key = process.env.REACT_APP_WEATHER_KEY;
  
    axios
      .get(`http://api.weatherstack.com/current?access_key=${key}&query=${capital}`)
      .then((response) => {
        if(response.statusText==="OK"){
          setCondition(response.data);
          console.log(condition)
          setAvailable(true);
        }
      })
  
      if (!available || condition===undefined){
        return (
          <div>No Weather info</div>
        )
      }
      else {
        return(
          <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {condition['current'].temperature}Celsius</p>
            <img src={condition['current'].weather_icons[0]} />
            <p><b>Wind:</b>{condition['current'].wind_speed} kmp/h direction {condition['current'].wind_dir}</p>
          </div>
        )
      } 
}

export default Weather;