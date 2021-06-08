import React from 'react';

const DisplayFullCountry = ({ country }) => {
    return (
      <> 
        <h1>{country.name}</h1>
        <p><strong>Capital: </strong>{country.capital}<br/>
           <strong>Population:</strong> {country.population}
        </p>
        <h2>Languages</h2>
        <ul>
        {country.languages.map(language =>
          <li>{language.name}</li>)}
        </ul>
        <br />
        <img src={country.flag} width="250" height="200"/>
        {/*<Weather capital={country.capital} />*/}
        <br/><br/><hr/>
      </>
    )
}

export default DisplayFullCountry;