import { useState } from "react"
const Form = ({ setStudents }) => {
    const emptyObj = {
        name: '',
        age: '',
        lastname: '',
        fathername: '',
    }
    const [form, setForm] = useState(emptyObj)
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        if (form.name != '')
            setStudents((prevState) => {
                return [...prevState, form]
            })
        handleReset()
    }
    const handleReset = () => {
        setForm(emptyObj)
    }
    return (
        <div className="h-3/10 bg-cyan-600 rounded-xl shadow-xl p-10 grid grid-cols-4 gap-4">
            <div className="h-12 bg-cyan-800 rounded-xl flex items-center px-2 gap-2">
                <label className="w-1/5 text-blue-200">Name</label>
                <input className="w-4/5 outline-none text-white placeholder:text-blue-100"
                    placeholder="Enter Your Name"
                    value={form.name}
                    name="name"
                    onChange={handleChange} />
            </div>
            <div className="h-12 bg-cyan-800 rounded-xl flex items-center px-2 gap-2">
                <label className="w-1/5 text-blue-200">Age</label>
                <input className="w-4/5 outline-none text-white placeholder:text-blue-100"
                    placeholder="Enter Your Age"
                    type="age" name="age"
                    value={form.age}
                    onChange={handleChange} />
            </div>
            <div className="h-12 bg-cyan-800 rounded-xl flex items-center px-2 gap-2">
                <label className="w-1/5 text-blue-200">F.Name</label>
                <input className="w-4/5 outline-none text-white placeholder:text-blue-100"
                    placeholder="Enter Your Father Name"
                    name="fathername"
                    value={form.fathername}
                    onChange={handleChange} />
            </div>
            <div className="h-12 bg-cyan-800 rounded-xl flex items-center px-2 gap-2">
                <label className="w-1/5 text-blue-200">L.Name</label>
                <input className="w-4/5 outline-none text-white placeholder:text-blue-100"
                    placeholder="Enter Your Last Name"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChange} />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="w-full h-full flex justify-end items-end gap-2">
                <button className="h-full w-full text-white bg-cyan-500 rounded-lg hover:cursor-pointer hover:bg-cyan-300" onClick={handleReset}>Reset</button>
                <button className="h-full w-full text-white bg-cyan-500 rounded-lg hover:cursor-pointer hover:bg-cyan-300" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Form