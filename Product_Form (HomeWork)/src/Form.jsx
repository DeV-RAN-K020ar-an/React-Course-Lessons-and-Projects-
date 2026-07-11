import { useState } from "react"
import { PackagePlus, FileBarChartIcon, SquareArrowRightExitIcon } from "lucide-react"

const Form = ({ setModal }) => {
  const handleClose = () => {
    setModal(false)
  }
  const style = {
    label: `h-full w-2/10 bg-slate-900 p-2 flex justify-center items-center text-slate-200`,
    inputs: `w-full outline-none pl-2 text-slate-500 focus:border focus:border-slate-400`
  }
  const [image, setImage] = useState()
  const [form, setForm] = useState({
    name: '',
    brand: '',
    price: '',
    min: '',
    max: '',
    description: '',
  })

  const handleChange = (event) => {
    let inputName = event.target.name
    let inputValue = event.target.value
    setForm({ ...form, [inputName]: inputValue })
  }

  const handleSubmit = () => {
    console.log(form)
  }

  const fields = [
    {
      label: 'Name',
      name: 'name',
      type: 'text'
    },
    {
      label: 'Brand',
      name: 'brand',
      type: 'text'
    },
    {
      label: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      label: 'Min',
      name: 'min',
      type: 'number'
    },
    {
      label: 'Max',
      name: 'max',
      type: 'number'
    },
    {
      label: 'Description',
      name: 'description',
      type: 'text'
    }
  ]

  return (
    <div className="bg-slate-200 h-[96%] w-[75%] rounded-2xl shadow-xl">
      <div className="h-1/10 bg-slate-900 w-full rounded-tl-2xl rounded-tr-2xl flex items-center justify-between pl-4 pr-4 text-white text-xl">
        <div className="flex items-center justify-center gap-2">
          <PackagePlus />
          <h1>Add Product</h1>
        </div>
        <div className="flex items-center justify-center hover:cursor-pointer">
          <button onClick={handleClose} className="hover:cursor-pointer"><SquareArrowRightExitIcon /></button>
        </div>
      </div>
      <div>
        <div className="p-4 h-1/10">
          <div className="w-full flex items-center justify-between text-xl p-4 pl-1 pr-1">
            <div className="flex items-center gap-2 justify-center">
              <FileBarChartIcon />
              <h2>Product Information</h2>
            </div>
            <div className="flex gap-4 text-[1rem] text-slate-200 w-2/10">
              <button className="bg-slate-900 w-full p-1 hover:bg-slate-300 hover:text-slate-900 hover:cursor-pointer transition-all border border-transparent hover:border-slate-950" onClick={handleSubmit}>Save</button>
              <button className="bg-slate-900 w-full p-1 hover:bg-slate-300 hover:text-slate-900 hover:cursor-pointer transition-all border border-transparent hover:border-slate-950">Cancel</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-full p-4 grid grid-rows-6 gap-5 w-6/10">
            {fields.map((field) => {
              return (
                <div className="bg-slate-300 w-full h-10 flex">
                  <label className={style.label}>{field.label}</label>
                  <input className={style.inputs} type={field.type} name={field.name} value={form[field.name]} onChange={handleChange} />
                </div>
              )
            })}
            <div className="w-full h-10 flex justify-center items-center">
              <label className={style.label}>Image</label>
              <input className="w-full outline-none pl-2 text-slate-500 text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-slate-300 file:text-slate-800 hover:file:bg-slate-100 hover:cursor-pointer" type="file" onChange={(event) => {
                const file = event.target.files[0]
                setImage(file ? URL.createObjectURL(file) : undefined)
              }} />
            </div>
          </div>
          <div className="p-4">
            <div className="w-112.5 h-85 bg-slate-300 flex items-center justify-center">
              <img
                src={image}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
