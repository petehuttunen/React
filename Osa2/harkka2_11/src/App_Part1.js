import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = "State of a component"
  const excercises3 = 14
return(
  <div>
    <Header course = {course} />
    <Content part = {part1} excercises = {excercises1}/>
    <Content part = {part2} excercises = {excercises2}/>
    <Content part = {part3} excercises = {excercises3}/>
    <Total number1 = {excercises1} number2 = {excercises2} number3 = {excercises3}/>
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
  return (
    <div>
      <p>{props.part} {props.excercises}</p>
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