import React from 'react';
import './Country.css'

const Country = (props) => {
  return (
    <div className='countries'>
      <h1>Name: {props.country.name.common}</h1>
      <h3>Population: {props.country.population}</h3>
      <p>Region: {props.country.region}</p>
      <p>Timezone: {props.country.timezones[0]}</p>
      <img src={props.country.flags.png}></img>
    </div>
  );
};

export default Country;