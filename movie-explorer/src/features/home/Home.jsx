import { BiSearch } from "react-icons/bi"
import MovieCard from "./MovieCard"

const Home = () => {
  const movies = [
    {
      id: 1,
      label: 'Lord of the Rings',
      image: '/images/5.jpg',
      rate: 8.9,
      description: 'Lorem ipsum dolor sit amet.',
      geners: 'Action, Fantasy'
    },
    {
      id: 2,
      label: 'Mission Impossible',
      image: '/images/3.jpg',
      rate: 7.0,
      description: 'Verry Action Movie.',
      geners: 'Action, Drama'
    }
  ]
  return (
    <main className="h-screen flex flex-col p-10 gap-4" style={{
      backgroundImage: 'url(/images/1.jpg)',
      backgroundSize: 'cover'
    }}>
      <header className="h-[15.5%] bg-[#ffffff18] backdrop-blur-xl border border-rose-500/8 rounded-xl flex justify-between px-4 items-center">
        <h1 className="text-[40px] text-rose-400 font-black">Movie Explorer</h1>
        <div className="flex w-90 bg-rose-400/12 border border-slate-100/5 rounded-xl items-center justify-center h-16 overflow-hidden gap-2 p-2">
          <div className="text-white text-2xl w-1/10 flex justify-center items-center h-full">
            <BiSearch className="text-rose-400" />
          </div>
          <input placeholder="Search Movies" className="outline-none h-full w-9/10 text-rose-300 placeholder:text-rose-400 text-lg" />
        </div>
      </header>
      <div className="h-10/12 p-2 gap-4 overflow-auto grid grid-cols-5">
        {movies.map((data) => {
          return <MovieCard data={data} />
        })}
      </div>
    </main>
  )
}

export default Home