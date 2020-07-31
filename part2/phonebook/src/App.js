import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import NewPerson from './components/NewPerson'
import Filter from './components/Filter'
import personsServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  /*   const [ persons, setPersons ] = useState(([
      { name: 'Arto Hellas', phone: '040-123456' },
      { name: 'Ada Lovelace', phone: '39-44-5323523' },
      { name: 'Dan Abramov', phone: '12-43-234345' },
      { name: 'Mary Poppendieck', phone: '39-23-6423122' }
    ])) 
   */
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setPhone] = useState('')
  const [sfilter, setSfilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    console.log('Entered useEffect event')
    personsServices.getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }, [])

  const addPerson = (event) => {
    console.log('Entered addPerson mehtod')
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newPhone
    }

    const list = persons.filter(person => person.name === newName)
    const personExists = list.length > 0
    
    if (personExists) {
      const id = list[0].id
      if (window.confirm(`${newName} already is in phonebook. Update phone number?`)) {
        personsServices
        .update(id, newPerson).then(returnedPerson => {
          setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
          setNewName('')
          setPhone('')
          setIsError(false)
          setErrorMessage("Person updated sucessful into server")
        })        
      } else {
        console.log("Update canceled!")
      }
    } else if (newName === '' | newPhone === '') {
      alert("Either Name and Phone should be filled.")
    } else {

      personsServices
        .create(newPerson).then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setPhone('')
          setIsError(false)
          setErrorMessage("Person added sucessful into server")
          setTimeout(() => {
            setErrorMessage(null)
            setIsError(false)
          }, 5000)          
        })

    }
  }

  const removePerson = (personId) => {
    console.log('Entered removePerson mehtod')
    if (window.confirm("Do you really want to remove this entry?")) {
      personsServices
        .remove(personId).then(returnedPerson => {
          setNewName('')
          setPhone('')
        }).catch(error => {
          setIsError(true)
          setErrorMessage("Person was already removed from server")
          setTimeout(() => {
            setErrorMessage(null)
            setIsError(false)
          }, 5000)
        })
        setPersons(persons.filter(p => p.id !== personId))
    } else {
      console.log('Cancel remove person')
    }
  }

  const handleSfilterChange = (event) => {
    console.log('Entered handleSfilterChange mehtod')
    setSfilter(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log('Entered handleNameChange mehtod')
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log('Entered handlePhoneChange mehtod')
    event.preventDefault()
    setPhone(event.target.value)
  }

  return (
    <div>
      <Notification message={errorMessage} isError={isError} />

      <h2>Phonebook</h2>
      <Filter sfilter={sfilter} handleSfilterChange={handleSfilterChange} />
      <h2>add a new</h2>
      <NewPerson addPerson={addPerson} newName={newName} newPhone={newPhone} 
            handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
      <Phonebook persons={persons} sfilter={sfilter} removePerson={removePerson} />
    </div>
  )
}

export default App