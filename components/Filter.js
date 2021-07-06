import React from 'react'

  const Filter = ({persons, newFilter}) => {
    return(
      <div>
        {persons.filter(person => person.name.toLowerCase().includes(newFilter) || newFilter === '')
        .map(person => <div key={person.name}> {person.name} {person.number} </div> )}
      </div> 
  
    )
  }

  export default Filter