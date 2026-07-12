import { useState } from "react"
const AddSection = ({ setItems, setModal }) => {
  const handleChange = () => {
    setModal(!false)
  }
  return (
    <div className="addItem">
      <section>
        <button onClick={handleChange}>+ Add Item</button>
      </section>
    </div>
  )
}
export default AddSection