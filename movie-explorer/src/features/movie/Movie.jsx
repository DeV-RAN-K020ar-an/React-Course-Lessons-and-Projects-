import { useParams } from "react-router"
import movies from '../shared/data'

const Movie = () => {
  const { id } = useParams()
  const foundObject = movies.find((movie) => {
    return movie.id == id
  })
  if (foundObject == undefined) {
    return (<div className="h-screen flex justify-center items-center bg-rose-950 text-white text-3xl">
      <h2 className="bg-rose-800 rounded-xl p-6">Movie Not Found</h2>
    </div>)
  }
  return (
    <main className="h-screen flex flex-col p-10 gap-6" style={{
      backgroundImage: `url(${foundObject.image})`,
      backgroundSize: 'cover'
    }}>
      <section className="h-7/10 flex gap-6">
        <div className="w-3/10 p-10 flex flex-col gap-5 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl text-white">
          <h1 className="text-4xl font-black text-blue-200">{foundObject.label}</h1>
          <h1 className="text-3xl text-rose-400">{foundObject.rate} IMDB</h1>
          <h1 className="text-2xl text-blue-300">{foundObject.geners}</h1>
          <p className="text-gray-300 text-lg">{foundObject.description}</p>
        </div>
        <div className="w-7/10 p-6 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl">
          <video src="/123.mp4" controls className="w-full h-full rounded-xl shadow-xl"></video>
        </div>
      </section>
      <section className="h-3/10 grid grid-cols-4 gap-4 p-4 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  )
}

export default Movie