import React from 'react'

const ShowCountries = ({countries, filter}) => {

    //console.log(countries)
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    const count = filteredCountries.length
    
    if (count > 10) {
        return (<p>Too much countries. Please, specify a filter.</p>)
    } 
    if (count === 1) {
        const country = filteredCountries[0]
        return (
            <div>
                <h2>{country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <h4>Languages:</h4> {country.languages.map(lang => <p key={lang.iso639_1}>{lang.name}</p>)}
                <h4>Flag</h4>
                <img src={country.flag} alt="flag" width="300" height="200"/>
            </div>
        )
    }
    if (count ===0) {
        return (<p>No country matches specified filter.</p>)
    }
    if (count > 0 && count <= 10)
    return (
        <div>
            {filteredCountries.map(country => <p key={country.alpha2Code}>{country.name} </p>)}
        </div>
    )

}

export default ShowCountries