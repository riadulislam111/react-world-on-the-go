import React, { use, useState } from 'react';
import countrys from '../Country/country';
import './Countries.css';
import Country from '../Country/country';



const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited countries clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedCountries(newVisitedCountries);
}

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3> My Total Flags Visited: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
<div className='visited-flags-container'>
    {
        visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
    }
</div>

            <div className='countries'>
            {
                countries.map(country => <Countries key={country.cca3.cca3} country= {country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Countries>)
            }
        </div>
        </div>
    );
};

export default Countries;