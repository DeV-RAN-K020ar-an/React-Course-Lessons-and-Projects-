const Input = ({ name, type, placeholder}) => {
    return (
        <div className="bg-blue-400 h-15 rounded-xl flex justify-between items-center p-4 gap-4">
            <label className="text-blue-200">{name}</label>
            <input className="h-full w-full outline-none text-white" type={type} placeholder={placeholder} />
        </div>
    )
}
export default Input