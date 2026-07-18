import { Link } from "react-router"

const MovieCard = ({ data }) => {
    const { id, label, image, rate, description, geners } = data
    return (
        <Link to={`/movie/${id}`} className="h-78 bg-rose-400/12 border-2 border-slate-100/5 backdrop-blur-sm transition-all duration-400 rounded-xl overflow-hidden flex flex-col hover:scale-103">
            <img src={image} className="h-6/10 w-full object-cover" />
            <div className="h-4/10 flex flex-col p-2 gap-2">
                <h1 className="text-xl text-rose-200 font-bold">{id}. {label}</h1>
                <div className="text-md flex justify-between">
                    <p className="text-rose-400">{rate} imdb</p>
                    <p className="text-rose-400">{geners}</p>
                </div>
                <p className="text-center text-rose-300">{description}</p>
            </div>
        </Link>
    )
}
export default MovieCard