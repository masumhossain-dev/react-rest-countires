import React from 'react';
import './Country.css'

const Country = (props) => {
  const {name, area, population, region, flags, timezones} = props.country;
  return (
    <div className='countries'>
      <h1>Country Name: {name.common}</h1>
      <h3>Region: {region}</h3>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>Timestamps: {timezones[0]}</p>
      <img src={flags.png}></img>
    </div>
  );
};

export default Country;