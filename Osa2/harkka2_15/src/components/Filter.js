import React from 'react'
import personService from '../services/Persons'

  //Filter persons according to the state of the current filter. Map the persons each on individual line according to person name
  // and add a button next to each person to delete the person. 
  const Filter = ({persons, newFilter, personsToShow, setPersons}) => {
    return(
      <div>
        {persons.filter(person => person.name.toLowerCase().includes(newFilter) || newFilter === '')
        .map(person => <div key={person.name}> {person.name} {person.number} <button onClick={() =>removePerson(person, persons, personsToShow, setPersons)}>delete</button> </div> )}
      </div> 
  
    )

  // Remove person according to id of the person if "yes" was clicked, then set the state of the person to reflect the changed 
  // list of persons and re-render it accordingly
  }
  const removePerson = (person, persons, personsToShow, setPersons) => {
    console.log("eka log person on ",person)
    if(window.confirm(`Delete ${person.name}`)) {
      personService.remove(person.id)
      console.log("toka log person on ",person)
      personsToShow = persons.filter(n => n.id !== person.id)
      setPersons(personsToShow)
      console.log("personsToShow deleten jälkeen on ",personsToShow)
    }   
  }
  export default Filter