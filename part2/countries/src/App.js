import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <p>Find countries: &nbsp;
                <input value={filter} onChange={handleFilterChange} />
            </p>
            <ShowCountries countries={countries} filter={filter} />
        </div>
        


    )
}

export default App