import React, { useState } from 'react'
import Card from './Card'
import cards from './cardsapi'
import Filterbar from './Filterbar'
import Navbar from '../Navbar'

const uniquelist = [
    ...new Set(
        cards.map((curElem) => {
            return curElem.title
        })
    ),
    "All"
]


const Gallary = () => {

    const [CardData, setCardData] = useState(cards);
    const [list, setlist] = useState(uniquelist)

    const filterItem = (category) => {
        if(category === "All") {
            setCardData(cards)
            return
        }

        const updatedList = cards.filter((curElem) => {
            return curElem.title === category
        })

        setCardData(updatedList)
    }

    return (
        <>
            <Navbar />
            <Filterbar filterItem ={filterItem} list={list} />
            <Card CardData={CardData} />
        </>
    )
}

export default Gallary
