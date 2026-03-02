import React, { use } from 'react';
import countrys from '../Country/country';
import './Countries.css';



const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <div className='countries'>
            {
                countries.map(country => <Countries key={country.cca3.cca3} country= {country}></Countries>)
            }
        </div>
        </div>
    );
};

export default Countries;