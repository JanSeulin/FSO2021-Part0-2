import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Display = ({ item, text }) => <p>{item} {text}</p>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * 6));
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const [mostVotes, setMost] = useState(0);

  const generate = () => {
    let newItem = (Math.floor(Math.random() * 6));
    if (newItem == selected) { generate() }
    else {setSelected(newItem)}
  };

  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);

    if(votes[selected] >= votes[mostVotes]) {
      setMost(selected);
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display item={anecdotes[selected]} text='' votes='' />
      <Display item={votes[selected]} text='votes' votes=''/>
      <Button handleClick={vote} text='Vote'  />
      <Button handleClick={generate} text='Next anecdote' />
      <h1>Anecdote with most votes</h1>
      <Display item={anecdotes[mostVotes]} text=""/>
      <p>Numer of votes: {votes[mostVotes]}</p>
    </div>
  );
}

export default App;
