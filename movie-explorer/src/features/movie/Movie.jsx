const Movie = () => {
  return (
    <main className="h-screen flex flex-col p-10 gap-6" style={{
      backgroundImage: 'url(/images/5.jpg)',
      backgroundSize: 'cover'
    }}>
      <section className="h-7/10 flex gap-6">
        <div className="w-3/10 p-10 flex flex-col gap-5 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl text-white">
          <h1 className="text-4xl font-black text-blue-200">Lord of the Rings</h1>
          <h1 className="text-3xl text-rose-400">8.9 IMDB</h1>
          <h1 className="text-2xl text-blue-300">Action, Fantasy</h1>
          <p className="text-gray-300 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores vitae aut consectetur eum exercitationem ex delectus corporis at cupiditate. Ducimus quas perspiciatis fuga dolorem. Saepe dolor minima non itaque.</p>
        </div>
        <div className="w-7/10 p-10 bg-[#2a2a2a48] backdrop-blur-2xl rounded-xl">
          <video className="w-full h-full"></video>
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