import Select from "react-select"
import Button from "./Button"

const App = () => {
  // const option = [
  //   {
  //     label: 'Claude',
  //     value: 'claude',
  //   }, 
  //   {
  //     label: 'Chatgpt 5.5',
  //     value: 'chatgpt'
  //   },
  //   {
  //     label: 'Gemini',
  //     value: 'gemini'
  //   }
  // ]
  return (
    <main className="bg-indigo-950 h-screen flex justify-center items-center">
      {/* <div className="w-120 border-none">
        <Select options={option} isMulti={true} />
      </div> */}
      <Button />
    </main>
  )
}

export default App

// npm website => react => Page 2 