import { BrowserRouter, Routes, Route } from "react-router"
import Cards from "./Pages/Cards/Cards"
import Flag from "./Pages/Flag"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/flag" element={<Flag />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App