import React, {useState} from 'react'
import Filter from './components/Filter'


const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

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
        filter shown with <input value = {newFilter} onChange = {handleFilterChange} />
        <Filter persons = {persons} newFilter = {newFilter} />
       {/* <div>
        {persons.filter(person => person.name.toLowerCase().includes(newFilter) || newFilter === '')
        .map(person => <div key={person.name}> {person.name} {person.number} </div> )}
       </div>  */}
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName}
          onChange = {handlePersonChange} />
        </div>
        <div>
          number: <input value = {newNumber}
          onChange = {handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>
        Numbers
      </h2>
      {persons.map(person=>
        
      <div key={person.name}>
        {person.name} {person.number} 
      </div>
      )}
    </div>
  )

}


export default App