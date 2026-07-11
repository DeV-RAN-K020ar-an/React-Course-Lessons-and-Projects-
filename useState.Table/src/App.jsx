import Table from "./Table.jsx"
import AddSection from "./AddSection"
import { useState } from "react"
import tabledata from "./table.js"

const App = () => {
    const [items, setItems] = useState(tabledata)
    return (
        <main>
            <Table items={items} setItems={setItems} />
            <AddSection setItems={setItems} />
        </main>
    )
}
export default App