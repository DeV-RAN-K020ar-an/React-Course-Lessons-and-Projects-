import { Link } from "react-router"

const Main = () => {
    return (
        <div className="bg-green-500 h-screen flex flex-col gap-6 text-4xl text-white justify-center items-center">
            <h2>Main</h2>
            <div className="flex gap-4 text-lg items-center justify-center">
                <Link to='/home'><button className="w-18 p-2 rounded-sm bg-green-950 cursor-pointer flex items-center justify-center hover:bg-green-700">Home</button></Link>
                <Link to='/about'><button className="w-18 p-2 rounded-sm bg-green-950 cursor-pointer flex items-center justify-center hover:bg-green-700">About</button></Link>
            </div>
        </div>
    )
}

export default Main