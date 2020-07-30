import React from 'react'

const Phonebook = ({ persons, sfilter }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(sfilter.toLowerCase())).map(person => (
                < div key={person.name} > {person.name} {person.phone}</div>
            ))}
        </div>
    )
}

export default Phonebook