import { useState } from "react"

const Counter = () => {

    const [data, setData] = useState(120)

    return (
        <div className="box">
            <section className="count">
                <h2>{data}</h2>
            </section>
            <section className="btn">
                <button onClick={() => {
                    setData(data + 1)
                }}>+</button>
                <button onClick={() => {
                    setData(data - 1)
                }}>-</button>
            </section>
        </div>
    )
}

export default Counter