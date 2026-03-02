import React, { use, useState } from 'react';
import countrys from '../Country/country';
import './Countries.css';
import country from '../Country/country';



const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('handle visited countries clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Countries key={country.cca3.cca3} country= {country} handleVisitedCountries={handleVisitedCountries}></Countries>)
            }
        </div>
        </div>
    );
};

export default Countries;