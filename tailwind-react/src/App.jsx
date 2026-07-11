const App = () => {

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <button className="bg-blue-500 p-4 m-4 rounded-2xl text-white font-bold hover:bg-blue-300 hover:cursor-pointer  hover:scale-125" id="button">Click Me</button>
      <button className="bg-rose-500 p-4 m-4 rounded-2xl text-white font-bold hover:bg-rose-900 hover:cursor- hover:font-normalF  hover:scale-110">Click Me</button>
      <button className="bg-green-500 p-4 m-4 rounded-2xl text-white font-normal hover:shadow-2xs shadow-green-300 hover:cursor-pointer ">Click Me</button>
      <input className="bg-teal-800 rounded-2xl p-4 text-white outline-none" placeholder="Enter Your Name" />
    </div>
  )
}

export default App