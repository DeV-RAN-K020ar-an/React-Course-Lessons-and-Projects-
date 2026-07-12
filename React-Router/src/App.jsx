import About from "./Pages/About"
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router"
import Main from "./Pages/Main"
import Error from "./Pages/Error"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App