import { useState } from "react"
import Form from "./Form"

const App = () => {
  const [modal, setModal] = useState(!false)
  return (
    <main className="h-screen bg-slate-400 flex justify-center items-center">
      {modal && <Form setModal={setModal} />}
    </main>
  )
}

export default App