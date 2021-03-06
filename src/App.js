import React, {useState, useEffect} from "react"
import './App.css';
import GameContainer from "./containers/gameContainer";
import Start from "./components/Start";
import styled from "styled-components"

const GameTitle = styled.h1 `
  margin-top: 5vh;
`

function App() {
  
  const [deck, setDeck] = useState([])
  const [card, setCard] = useState(null)
  const [number, setNumber] = useState(null)
  const [entries, setEntries] = useState([])
  const [name, setName] = useState(null)
  const [shipName, setShipName] = useState(null)

  useEffect(() => {
    fetchDeck()
  }, [])

  const fetchDeck = () => {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(res =>setDeck(res))

  }

  const fetchCard = () => {
    fetch(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
    .then(res => res.json())
    .then(res =>setCard(res))
  }

  const rollDice = () => {

    let result = Math.floor(Math.random() * 6) + 1

    setNumber(result)
  }

  const addJournalEntry = (entry) => {
    const currentEntries = [...entries]
    currentEntries.push(entry)

    setEntries(currentEntries)
  }
  
  
  return (
    <div className="App">

      <GameTitle>Alone Among The Stars</GameTitle>
      
      {name ? <GameContainer deck={deck} card={card} number={number} entries = {entries} fetchCard = {fetchCard} rollDice = {rollDice} addJournalEntry = {addJournalEntry} name = {name} shipName = {shipName} /> : <Start setName = {setName} setShipName = {setShipName}/> }

    </div>
  );
}

export default App;
