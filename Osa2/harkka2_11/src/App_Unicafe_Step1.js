import React, {useState} from 'react'

const Display = props => <div>{props.name} {props.value}</div>

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
      </div>

    </div>
  )

}


export default App