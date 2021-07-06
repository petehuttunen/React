import React, {useEffect, useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import axios from 'axios'


const App = () => {
  
  useEffect( () => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [] )

  const [ persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')



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
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }



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
      <Filter persons = {persons} newFilter = {newFilter} />
    </div>
  )

}


export default App