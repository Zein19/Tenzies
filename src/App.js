import Die from './Die';
import './App.css';
import React from 'react';


function App() {
  function allNewDice(){
    const newDice=[]
    for(let i=0; i<10; i++){
      newDice.push({
        value: Math.ceil(Math.random()*6) ,
        isHeld: false,
        id: i
      })
    }
    return newDice
  }

  

  const[dice,setDice]=React.useState(allNewDice)
 
  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} /> )

  function rollDice(){
    if (!tenzies){
    setDice(oldDice => oldDice.map(die =>{
      return die.isHeld ?
      die :
      {...die, value: Math.ceil(Math.random()*6)}
    } ))
  }else {
    setTenzies(false)
    setDice(allNewDice)
  }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}

const[tenzies,setTenzies]=React.useState(false)
React.useEffect(() => {
const allHeld = dice.every(die => die.isHeld)
const firstValue = dice[0].value
const allSameValue = dice.every(die => die.value === firstValue)

if (allSameValue && allHeld){
  setTenzies(true)
  
}
}, [dice])



  return (
    <div className="App">
      
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </div>
  );

  }
export default App;
