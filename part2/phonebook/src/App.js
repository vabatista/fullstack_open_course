import React, { useState } from 'react'
import Phonebook from './components/Phonebook'
import NewPerson from './components/NewPerson'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState(([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setPhone ] = useState('')
  const [ sfilter, setSfilter ] = useState('')

  const checkPersonExists = () => {
    const list = persons.filter(person => person.name === newName)
    console.log('Filtered list', list)
    return list.length > 0
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (checkPersonExists()) {
      alert(`${newName} is already added to phonebook`)
    } else if (newName === '' | newPhone === '') {
      alert("Either Name and Phone should be filled.")
    } else {
      const newPerson = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(newPerson))
      setNewName('')    
      setPhone('')
    } 
  }

  const handleSfilterChange = (event) => {
    setSfilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter sfilter={sfilter} handleSfilterChange={handleSfilterChange} />
      <h2>add a new</h2>
      <NewPerson addPerson={addPerson} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
      <Phonebook persons={persons} sfilter={sfilter} />
    </div>
  )
}

export default App