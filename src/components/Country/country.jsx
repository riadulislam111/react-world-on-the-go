import React, { useState } from 'react';
import './country.css';

const country = ({country, handleVisitedCountries}) => {
// console.log(country.name.common)
const [visited, setVisited] = useState(false);

const handleVisited = () => {
    // basic system 

//    if (visited) {
//     setVisited(false);

//    }else { 

//     setVisited(true);
//    }

   // 2nd system

// setVisited(visited? false : true);

// 3rd system 
setVisited(!visited);
handleVisitedCountries(country);
}



    return (
        // <div className={`country ${visited $$ 'country-visited'}`}>
        <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}>
        
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : 'Small Country'}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default country;