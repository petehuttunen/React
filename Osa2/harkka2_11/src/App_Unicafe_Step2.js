import React, {useState} from 'react'

const Display = props => 
   <div>{props.name} {props.value}</div>
   
const Total = props => {
  return (
    <div>
      all {props.number1 + props.number2 + props.number3}
    </div>
  )
}  

const Average = props => {
  return (
    <div>
      Average {(props.number1 + props.number2*0 + props.number3*-1)/ (props.number1 + props.number2 + props.number3)}
    </div>
  )
}

const Positive = props => {
  return (
    <div>
      Positive {props.number1 / (props.number1 + props.number2 + props.number3)*100 } %
    </div>
  )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>

  )
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = 'good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text = 'neutral' />
      <Button handleClick={() => setBad(bad +1)} text = "bad" />

      <div>
        <h1>statistics</h1>
        <Display name = 'good' value = {good} />
        <Display name = 'neutral' value = {neutral} />
        <Display name = 'bad' value = {bad} />
        <Total number1 = {good} number2 = {neutral} number3 = {bad} />
        <Average number1 = {good} number2 = {neutral} number3 = {bad} />
        <Positive number1 = {good} number2 = {neutral} number3 = {bad} />
      </div>

    </div>
  )

}


export default App