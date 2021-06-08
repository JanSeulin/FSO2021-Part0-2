import React from 'react';
import DisplayFullCountry from './DisplayFullCountry';
import Show from './Show';

const Display = ({ countries }) => {
    console.log(countries);
    console.log(countries.length)
  
    if (countries.length === 0) return (<div></div>)
    else if (countries.length > 20) {
      return (
        <p>Too many countries</p>
      )
    }
    else if (countries.length > 1 && countries.length <= 20) {
      return (
        <ul>
          {countries.map(country => 
            <li key={country.name}>{country.name}&nbsp;&nbsp;   
            <Show country={country} /></li>
          )}
        </ul>
      )
    } 
    else if (countries.length === 1) {
      return (
        <div>
          {countries.map(country =>
            <DisplayFullCountry key={country.name} country={country} />
          )}
        </div>
      )
    }
  }

export default Display;