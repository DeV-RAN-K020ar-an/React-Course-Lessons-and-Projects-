const Home = () => {
  return (
    <main className="h-screen flex flex-col p-10 gap-4" style={{
      backgroundImage: 'url(/images/1.jpg)',
      backgroundSize: 'cover'
    }}>
      <header className="h-2/10 bg-[#5a5a5a18] backdrop-blur-xl rounded-xl flex justify-center items-center">
        <input placeholder="Search Movies..." className="p-4 w-80 bg-red-400 outline-none rounded-xl focus:bg-red-600 text-white text-lg" />
      </header>
      <div className="h-8/10 overflow-auto bg-[#1d1d1d35] backdrop-blur-2xl rounded-xl"></div>
    </main>
  )
}

export default Home