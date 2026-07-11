import Card from "./Card"
import { useState } from "react"

const Cards = () => {
    const items = [
        {
            label: 'Dark Souls',
            color: 'rgb(81, 98, 255)',
            image: '/images/Dark-Souls-III-03.jpg'
        },
        {
            label: 'Elden Ring',
            color: 'rgb(228, 228, 228)',
            image: '/images/elden ring.jpg'
        },
        {
            label: 'Dark Souls (3)',
            color: 'white',
            image: '/images/Dark-Souls-III.jpg'

        },
        {
            label: 'Dark Souls (2)',
            color: 'whitesmoke',
            image: '/images/Dark-Souls-II.jpg'
        },
        {
            label: 'Dark Souls (1)',
            color: 'gold',
            image: '/images/Dark-Souls-III-02.jpg'
        },
        {
            label: 'Dark Souls (2)',
            color: 'lightblue',
            image: '/images/Dark-Souls-III-03.jpg'
        },
        {
            label: 'Dark Souls',
            color: 'goldenrod',
            image: '/images/Dark-Souls-III.jpg'
        },
        {
            label: 'Elden Ring',
            color: 'whitesmoke',
            image: '/images/elden ring.jpg'
        }
    ]
    const [cards, setCards] = useState([])
    const addCards = () => {
        const randomNumber = Math.floor(Math.random() * items.length)
        const randomObject = items[randomNumber]
        setCards([...cards, randomObject])
    }
    
    return (
        <div className="card-container">
            {cards.map((item) => {
                return <Card detail={item} />
            })}
            {/* <h3>{name}</h3> */}
            <button onClick={addCards} id='random-btn'>Random</button>
        </div>
    )
}

export default Cards