import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    excercises: 10
  },
  {
    name: 'Using props to pass data',
    excercises: 7
  },
  {
    name: "State of a component",
    excercises: 14
  } 
]
return(
  <div>
    <Header course = {course} />
    <Content parts = {parts} />
    <Total parts = {parts}/>
  </div>
)
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props)
  //console.log(props.name)
  //console.log(props.excercises)
  return (
    <>
      {props.parts.map(part => (
      <Part name = {part.name} excercises = {part.excercises}/>
      ))}
    </>
  )
}

const Total = (props) => {
  return(
    <div>
     <p>
        Number of excercises {props.parts.map(part => part.excercises).reduce((total, excercises) => total + excercises)}  
     </p>  
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.name} {props.excercises} </p>  
    </div>
  )
}


export default App