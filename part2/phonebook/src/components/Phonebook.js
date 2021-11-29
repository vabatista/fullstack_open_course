import React from 'react'

const Phonebook = ({ persons, sfilter, removePerson }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(sfilter.toLowerCase())).map(person => (
                < div key={person.id}> 
                    {person.name} {person.phone} <button onClick={(event) => {
                        event.preventDefault()
                        removePerson(person.id)}
                    }>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Phonebook    