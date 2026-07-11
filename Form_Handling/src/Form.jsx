import { useState } from "react"

const Form = () => {
  const style = {
    main: `w-4/10 bg-indigo-600 h-5/10 shadow-xl grid grid-rows-4 p-4`,
    div: `bg-blue-500 h-3/4 border-blue-400 border flex justify-between items-center pl-2`,
    button: `bg-blue-500 w-30 h-10 font-bold text-black flex justify-center items-center hover:border cursor-pointer`,
  }

  const [form, setForm] = useState({
    name: '',
    age: '',
    lastname: ''
  })

  const handleChange = (event) => {
    let inputName = event.target.name
    let inputValue = event.target.value
    setForm({ ...form, [inputName]: inputValue })

  }
  const fields = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'Enter Your Name'
    },
    {
      label: 'Age',
      name: 'age',
      type: 'number',
      placeholder: 'How Old Are You?'
    },
    {
      label: 'Last Name',
      name: 'lastname',
      type: 'text',
      placeholder: 'Enter Your Last Name'
    }
  ]
  const handleSubmit = () => {
    console.log(form)
  }
  return (
    <main className={style.main}>
      {fields.map((field) => {
        return (
          <div className={style.div}>
            <label className="w-1/5 font-bold">{field.label}</label>
            <input type="text" className="w-4/5 outline-none"
              placeholder={field.placeholder}
              value={form[field.name]}
              name={field.name}
              onChange={handleChange} />
          </div>
        )
      })}
      <button className={style.button} onClick={handleSubmit}>Submit</button>
    </main>
  )
}

export default Form