import React, {useEffect, useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import axios from 'axios'
import personService from './services/Persons'

const App = () => {
  
  useEffect( () => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [] )

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    for(let i=0; i<persons.length; i++){
      console.log(`personObject.name ${personObject.name} `)
      console.log(`persons[i].name ${persons[i].name} `)
      if( personObject.name === persons[i].name ){
        console.log('ii on ', i)
          window.alert(`${personObject.name} on jo lisätty`)
          setNewName('')
          setNewNumber('')
          console.log(`setNewName('') ${setNewName('')} `)
          return
      }
    }

    personService
    .create(personObject)
    .then(returnedPerson => {
      console.log(returnedPerson)
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })  
    
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().match(newFilter.toLowerCase))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <FilterForm newFilter = {newFilter} handleFilterChange = {handleFilterChange} />        
      </div>
      <h2>add a new</h2>
        <PersonForm addPerson = {addPerson} newName = {newName} newNumber = {newNumber} handlePersonChange = {handlePersonChange}
        handleNumberChange = {handleNumberChange} />
      <h2>
        Numbers
      </h2>
      <Filter persons = {persons} newFilter = {newFilter} personsToShow = {personsToShow} setPersons = {setPersons}/>
    </div>
  )

}


export default App