import { useState } from "react"
import { toast } from "react-toastify"

const Modal = ({ setModal, setItems }) => {
  const handleClose = () => {
    setModal(false)
  }
  const emptyOBJ = {
    id: '',
    item: '',
    quantity: '',
    cost: '',
    date: '',
  }

  const [form, setForm] = useState(emptyOBJ)
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    if (form.id != '' || form.item != '') {
      setTimeout(() => {
        setItems((prevState) => {
          return [...prevState, form]
        })
      }, 1500)
      handleClose()
      setTimeout(() => {
        toast.success('Successfully Added An Item!')
      }, 100)
    }
    else {
      toast.error('You Should Complete The Form!')
    }
  }

  return (
    <div className="modal">
      <div className="header">
        <h3>New Item</h3>
        <button onClick={handleClose}><img src="/x.svg" /></button>
      </div>
      <section className="input-section">
        <div>
          <label>ID</label>
          <input type="number" value={form.id} name="id" onChange={handleChange} />
        </div>
        <div>
          <label>Item</label>
          <input value={form.item} name="item" onChange={handleChange} />
        </div>
        <div>
          <label>Quantity</label>
          <input value={form.quantity} name="quantity" onChange={handleChange} type="number" />
        </div>
        <div>
          <label>Cost</label>
          <input value={form.cost} name="cost" onChange={handleChange} type="number" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={form.date} name="date" onChange={handleChange} />
        </div>
      </section>
      <section style={{
        height: '5%',
      }}>
      </section>
      <section className="add-item">
        <button onClick={handleSubmit}>Add</button>
      </section>
    </div>
  )
}

export default Modal