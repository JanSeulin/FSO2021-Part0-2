import './App.css';
import React, { useState } from 'react';

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick} id={text}>{text}</button>
)

const Stats = ({ total, good, neutral, bad }) => {
  if(total == 0) {
    return (
      <p>No feedback given.</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text='Good' value={good} />
          <Statistic text='Neutral' value={neutral} />
          <Statistic text='Bad' value={bad} />
          <Statistic text='All' value={total} />
          <Statistic text='Average' value={(good-bad) / total} />
          <Statistic text='Positive' value={good / total * 100 + '%'} />
        </tbody>
      </table>
    </div>
  )
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {setGood(good + 1); setTotal(total + 1);};
  const handleNeutral = () => {setNeutral(neutral + 1); setTotal(total + 1);};
  const handleBad = () => {setBad(bad + 1); setTotal(total + 1);};

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad'/>
      <h2>Statistics</h2>
      <Stats total={total} good={good} bad={bad} neutral={neutral} />
    </div>  
  );
}

export default App;
