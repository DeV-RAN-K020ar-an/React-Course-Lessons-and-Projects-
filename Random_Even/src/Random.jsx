import { useState } from "react"

const Random = () => {
    
    const [number, setNumber] = useState('0')
    const handleClick = () => {
        let randomNumber = Math.round(Math.random () * 200)
        let evenNumber = randomNumber % 2 == 0 ? randomNumber : randomNumber + 1

        setNumber(number + ' - ' + evenNumber)
    }
    
    const handleReset = () => {
        setNumber(0)
    }

    const handleDeleteLast = () => {
        let numbersArray = number.split(' - ')
        let numberDelete = numbersArray.pop()
        let numberString = numbersArray.join(' - ')

        setNumber(numberString)
    }

    return (
        <div className="container">
            <p>{number}</p>
            <button onClick={handleClick}>Random</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDeleteLast}>Delete Last</button>
        </div>
    )
}
export default Random