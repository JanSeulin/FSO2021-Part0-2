import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Display from './components/Display';

/* 
Obs: The weather app is not working because of the month limit, before that it was
working just fine. I couldn't figure out a solution to this, so I commented out 
the call to the Weather component in the DisplayFullCountry component
*/

function App() {
  const [countries, setCountry] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountry(response.data);
      });
  },[]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  }
  
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  // console.log(filteredCountries)

  return (
    <div>
      <input value={searchValue} onChange={handleSearch} placeholder="Search..." />
      <Display countries={filteredCountries} />
    </div>
)}

export default App;
