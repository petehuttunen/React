import React, {useState} from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.value1 + props.value2 + props.value3 < 1 ) {
    return (
      <tbody>
        <tr>
          <td>
            No feedback given
          </td>
        </tr>
      </tbody>
    //<div>
//      No feedback given
    //</div>
    )
  }
  return (
    <tbody>
      <StatisticLine text = "good" value = {props.value1} />
       {/*{props.name1} {props.value1} */} 

      <StatisticLine text = "neutral" value = {props.value2} />
       { /*{props.name2} {props.value2}*/  }

      <StatisticLine text = "bad" value = {props.value3} />                  
          { /*{props.name3} {props.value3} */}
 
      <StatisticLine text = "All" value = {props.number1 + props.number2 + props.number3} />                  
            {/*all {props.number1 + props.number2 + props.number3}*/}
 
      <StatisticLine text = "Average" value = {(props.number1 + props.number2*0 + props.number3*-1)/ (props.number1 + props.number2 + props.number3)} />                  
              {/*Average {(props.number1 + props.number2*0 + props.number3*-1)/ (props.number1 + props.number2 + props.number3)}*/}

      <StatisticLine text = "Positive" value = {props.number1 / (props.number1 + props.number2 + props.number3)*100 } />                  
              {/*Positive {props.number1 / (props.number1 + props.number2 + props.number3)*100 } %*/} 
    </tbody>             
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
    <>
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = 'good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text = 'neutral' />
      <Button handleClick={() => setBad(bad +1)} text = "bad" />

      {/*<div>*/}
        <h1>statistics</h1>
        </div>
        {/*<Statistics name1 = 'good' value1 = {good} name2 = 'neutral' value2 = {neutral}
        name3 = 'bad' value3 = {bad}
        number1 = {good} number2 = {neutral} number3 = {bad} />*/}
        <table>
          {<Statistics value1 = {good} value2 = {neutral} value3 = {bad}
          number1 = {good} number2 = {neutral} number3 = {bad} />}
        </table>
    </>

  )

}


export default App