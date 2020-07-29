import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stat = ({label, value}) => {
  return (<tr><td>{label}:</td><td>{value}</td></tr>)
}

const Stats = ({good, neutral, bad}) => {
  
  const total = good + bad + neutral
  const positiveRate = () => {
    if (total === 0) {
      return "0 %"
    }
    return (((good / total)*100).toFixed(2).toString() + ' %')
  }

  const avg = () => {
    if (total === 0) {
      return 0
    }
    return ((good*1 + bad*-1 + neutral*0)/total).toFixed(2)
  }
  if (total === 0) {
    return ("No feedback given")
  }
  return (
    
    <table>
      <thead><tr><td>Statistic</td><td>Current Value</td></tr></thead>
      <tbody>
        <Stat label="Good" value={good}/>
        <Stat label="Neutral" value={neutral}/>
        <Stat label="Bad" value={bad}/>
        <Stat label="All" value={total}/>
        <Stat label="Average" value={avg()}/>
        <Stat label="Positive rate" value={positiveRate()}/> 
      </tbody>
    </table>
    
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback, please!</h1>
      <p>
        <Button onClick={() => setGood(good + 1)} text="Good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button onClick={() => setBad(bad + 1)} text="Bad" />
      </p>
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
