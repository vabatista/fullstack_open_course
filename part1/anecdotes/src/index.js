import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})
  
  //Most voted:https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
  //TODO: This is not good yet. Needs improvement to return lowest index if more than one is equal.
  const maxVotes = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
  


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes.</p>
      <p><button onClick={() => pickAnecdote(setSelected)}>Next Anecdote</button>
      <button onClick={() => vote(votes, setVotes, selected)}>Vote</button></p>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[maxVotes]} has {votes[maxVotes]} votes.</p>


    </div>
    
  )
}

const pickAnecdote = (setSelected) => {
  setSelected(Math.floor((Math.random() * anecdotes.length) + 0))
}


const vote = (votes, setVotes, selected) => {

  const copyOfVotes = {...votes}
  copyOfVotes[selected] += 1   
  setVotes(copyOfVotes)

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
