import { useState } from "react"

const Form = () => {
    const emptyOBJ = {
        name: '',
        category: '',
        price: '',
        description: ''
    }
    const [form, setForm] = useState(emptyOBJ)
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        alert(`
        Name: ${form.name}    
        Category: ${form.category}    
        Price: ${form.price}    
        Description: ${form.description}    
        `)
    }
    return (
        <div className="w-[33%] h-7/10 bg-slate-400 rounded-xl overflow-hidden shadow-xl">
            <div className="h-[15%] mb-4 text-2xl w-full flex items-center justify-center bg-slate-500 text-slate-50 font-bold">
                <h2>● BOOKSTORE ●</h2>
            </div>
            <div className="h-9/10 w-full p-2 grid grid-rows-5">
                <div className="h-5/10 w-full flex items-center gap-2 justify-start overflow-hidden rounded bg-slate-500 shadow-xl">
                    <label className="w-[31.5%] h-full bg-slate-700 flex items-center justify-center p-2 text-slate-50">Name</label>
                    <input className="w-full h-full pl-2 outline-none" value={form.name} name="name" onChange={handleChange} placeholder="Enter Your Book Name" />
                </div>
                <div className="h-5/10 w-full flex items-center gap-2 justify-start overflow-hidden rounded bg-slate-500 shadow-xl">
                    <label className="w-[26.5%] h-full bg-slate-700 flex items-center justify-center p-2 text-slate-50">Category</label>
                    <select value={form.category} name="category" className="w-10/12 outline-none h-full " onChange={handleChange}>
                        <option>Programming</option>
                        <option>Phsycology</option>
                        <option>Art</option>
                        <option>Language</option>
                        <option>Learning</option>
                    </select>
                </div>
                <div className="h-5/10 w-full flex items-center gap-2 justify-start overflow-hidden rounded bg-slate-500 shadow-xl">
                    <label className="w-[31.5%] h-full bg-slate-700 flex items-center justify-center p-2 text-slate-50">Price</label>
                    <input type="number" value={form.price} name="price" onChange={handleChange} placeholder="Enter Your Price" className="w-full h-full pl-2 outline-none" />
                </div>
                <div className="h-5/10 w-full flex items-center gap-2 justify-start overflow-hidden rounded bg-slate-500 shadow-xl">
                    <label className="w-[31.5%] h-full bg-slate-700 flex items-center justify-center p-2 text-slate-50">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} placeholder="Write Description" className="w-full h-full pl-2 outline-none flex items-center justify-center pt-2"></textarea>
                </div>
                <div className="w-full flex items-center justify-center h-[52%]">
                    <button onClick={handleSubmit} className="p-2 w-2/8 rounded bg-slate-700 hover:bg-slate-500 hover:cursor-pointer text-slate-50 border border-transparent hover:border-slate-300">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form