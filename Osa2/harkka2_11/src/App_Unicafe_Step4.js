import React, {useState} from 'react'

const Statistics = (props) => {
  if (props.value1 + props.value2 + props.value3 < 1 ) {
      return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      {props.name1} {props.value1}
      <div>
        {props.name2} {props.value2}
        <div>
          {props.name3} {props.value3}
          <div>
            all {props.number1 + props.number2 + props.number3}
            <div>
              Average {(props.number1 + props.number2*0 + props.number3*-1)/ (props.number1 + props.number2 + props.number3)}
            </div>  
              Positive {props.number1 / (props.number1 + props.number2 + props.number3)*100 } %
          </div>
        </div>
      </div>
    </div>
  )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>

  )

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
        <Statistics name1 = 'good' value1 = {good} name2 = 'neutral' value2 = {neutral}
        name3 = 'bad' value3 = {bad}
        number1 = {good} number2 = {neutral} number3 = {bad} />
      </div>

    </div>
  )

}


export default App