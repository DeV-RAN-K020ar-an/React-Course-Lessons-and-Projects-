import { useState } from "react"
import Modal from "./Modal"

const AddSection = ({ setItems }) => {
  const [modal, setModal] = useState(false)
  const handleChange = () => {
    modal == false ? setModal(!false) : setModal(false)
  }
  return (
    <div className="addItem">
      {modal && <Modal setModal={setModal} setItems={setItems} />}
      <section>
        <button onClick={handleChange}>+ Add Item</button>
      </section>
    </div>
  )
}
export default AddSection