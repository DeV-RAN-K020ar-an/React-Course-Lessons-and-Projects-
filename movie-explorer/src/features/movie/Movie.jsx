import { useParams } from "react-router"
import movies from '../shared/data'
import { GrFormPreviousLink } from "react-icons/gr"
import { useNavigate } from "react-router"

const Movie = () => {
  const { id } = useParams()
  const foundObject = movies.find((movie) => {
    return movie.id == id
  })

  if (foundObject == undefined) {
    return (<div className="h-screen flex justify-center items-center bg-slate-700 text-white text-3xl">
      <h2 className="bg-slate-300 shadow-xl border border-rose-200/50 rounded-xl p-6">Movie Not Found</h2>
    </div>)
  }
  const navigate = useNavigate()
  return (
    <main className="h-screen flex flex-col p-10 gap-6" style={{
      backgroundImage: `url(${foundObject.image})`,
      backgroundSize: 'cover'
    }}>
      <div className="absolute left-4 top-3 text-2xl duration-300 transition-all border-transparent hover:cursor-pointer border hover:border-slate-200/15 z-10 p-4 bg-[#2a2a2a48] backdrop-blur-2xl rounded-full flex items-center justify-center" onClick={() => {
        navigate('/home')
      }}><GrFormPreviousLink color="white" /></div>
      <section className="h-7/10 flex gap-6">
        <div className="w-3/10 p-10 flex flex-col gap-5 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl text-white">
          <h1 className="text-4xl font-black text-blue-200">{foundObject.label}</h1>
          <h1 className="text-3xl text-rose-400">{foundObject.rate} IMDB</h1>
          <h1 className="text-2xl text-blue-300">{foundObject.geners}</h1>
          <p className="text-gray-300 text-lg">{foundObject.description}</p>
          <p className="text-gray-300 text-lg">{foundObject.plot}</p>
        </div>
        <div className="w-7/10 p-4 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl">
          <video src={foundObject.src} controls className="w-full h-full rounded-xl shadow-xl"></video>
        </div>
      </section>
      <section className="h-3/10 flex gap-4 p-4 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl">
        {foundObject.images.map((image) => {
          return <img className="h-full w-full object-cover rounded-xl border-2 border-slate-100/8 shadow-xl" src={image} />
        })}
      </section>
    </main>
  )
}

export default Movie