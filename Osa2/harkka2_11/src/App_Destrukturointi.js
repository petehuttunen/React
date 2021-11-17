import React from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => { return new Date().getFullYear() - age}
  
  console.log(age +' ' +bornYear)
  console.log(new Date().getFullYear())
  return (
    
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born {bornYear}
      </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>    
  )
}


export default App