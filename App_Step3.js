import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    excercises: 7
  }
  const part3 = {
    name: "State of a component",
    excercises: 14
  } 
return(
  <div>
    <Header course = {course} />
    <Content part1 = {part1.name} excercises1 = {part1.excercises} part2 = {part2.name} excercises2 = {part2.excercises}
    part3 = {part3.name} excercises3 = {part3.excercises} />
    <Total number1 = {part1.excercises} number2 = {part2.excercises} number3 = {part3.excercises}/>
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
  console.log(props)
  console.log(props.name)
  console.log(props.excercises)
  return (
    <div>
      <Part name = {props.part1} excercises = {props.excercises1}/>
      <Part name = {props.part2} excercises = {props.excercises2}/>
      <Part name = {props.part3} excercises = {props.excercises3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of excercises {props.number1 + props.number2 +props.number3}  
      </p>  
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.name} {props.excercises}</p>  
    </div>
  )
}
  /*return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {excercises1}
      </p>
      <p>
        {part2} {excercises2}  
      </p>
      <p>
        {part3} {excercises3}
      </p>
      <p>
        Number of excercises {excercises1 + excercises2 + excercises3}
      </p>
    </div>
  ) */


export default App