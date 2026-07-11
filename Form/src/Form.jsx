import Input from "./Input"
import fields from "./fields"

const Form = () => {
  return (
    <div className="bg-indigo-600 h-4/6 w-2/7 rounded-2xl p-10 grid grid-rows-5 shadow-2xl ">
      {fields.map((field) => { 
        return <Input name={field.name} type={field.type} placeholder={field.placeholder} />
      })}
      <div className="flex justify-center items-center">
        <button className="bg-blue-400 w-2/6 h-6/10 rounded-xl text-white  hover:border-blue-200 hover:border hover:cursor-pointer hover:transition-all">Submit</button>
      </div>
    </div>
  )
}

export default Form