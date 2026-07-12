import Table from "./Table.jsx"
import AddSection from "./AddSection"
import { useState } from "react"
import tabledata from "./table.js"
import Modal from "./Modal.jsx"

const App = () => {
    const [items, setItems] = useState(tabledata)
    const [modal, setModal] = useState(false)
    return (
        <main>
            {modal && <Modal setModal={setModal} setItems={setItems} />}
            <Table items={items} setItems={setItems} />
            <AddSection setItems={setItems} setModal={setModal} />
        </main>
    )
}
export default App