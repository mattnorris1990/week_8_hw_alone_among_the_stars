import React from "react"
import CardDiceInfo from "../components/CardDiceInfo"
import TurnDetails from "../components/TurnDetails"
import JournalEntryForm from "../components/JournalEntryForm"
import JournalEntries from "../components/JournalEntries"
import styled from "styled-components"

const DetailsAndJournal = styled.div`
    display: flex;
    justify-content: space-around;
`

const JourneyDetails = styled.section`
    text-align: left;
    max-width: 30%;
    min-width: 30%;
`

const Log = styled.section`
    text-align: center;
    width: 50%;
    margin: auto;
    
`


const GameContainer = ({deck, number, entries, card, fetchCard, rollDice, addJournalEntry, downloadLog}) => {

    return (
        <>
            <DetailsAndJournal>
                <JourneyDetails>   

                    <CardDiceInfo card={card} number = {number} fetchCard = {fetchCard} rollDice = {rollDice} />
                    {card ? <TurnDetails card={card} number = {number}/> : null}

                </JourneyDetails>

                <JourneyDetails>
                    <JournalEntryForm addJournalEntry = {addJournalEntry}/>
                    
                </JourneyDetails>
            </DetailsAndJournal>
            <Log>
                <JournalEntries entries={entries}/>
            </Log>
        </>
    )
}

export default GameContainer