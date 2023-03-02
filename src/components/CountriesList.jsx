import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiURL = ' https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
  
  
  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      console.log(response);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
    <ul>
         {countries.map((ctr) => {
            return (
          <div key={ctr.alpha3Code}>
          <li>
          <Link to={ctr.alpha3Code}>{ctr.name.common}</Link></li>
          </div>
            )
            
    })}
         
    </ul>
    {loading && <h2>Loading...</h2>}

</div>
 )
};

export default CountriesList