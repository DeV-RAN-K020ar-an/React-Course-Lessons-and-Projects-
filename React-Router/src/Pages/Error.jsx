import { Link } from "react-router"

const Error = () => {
    return (
        <div className="h-screen bg-red-800 flex flex-col gap-4 justify-center items-center text-3xl text-white text-center">
            <h1 className="text-9xl">404</h1>
            <p>Page Not Found</p>
            <div className="text-sm p-3 bg-red-950 rounded-4xl w-1/9">
                <Link to='/'>Go Back to Main</Link>
            </div>
        </div>

    )
}

export default Error