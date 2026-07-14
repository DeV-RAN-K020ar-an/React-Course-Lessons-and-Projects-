import { Link } from "react-router"

const Card = ({ flag, stars, name, id }) => {
    return (
        <Link to={'/flag/' + id} className={`h-4/10 shadow-xl w-2/12 overflow-hidden rounded-xl transition-all duration-300 border-transparent border hover:border-slate-300/10 hover:cursor-pointer bg-cyan-500/10`}>
            <img src={flag} className="h-6/10 w-full object-cover" />
            <div className="h-4/10 flex flex-col items-center justify-center gap-4">
                <h1 className="text-white text-4xl font-black">{name}</h1>
                <p>{stars}</p>
            </div>
        </Link>

    )
}

export default Card