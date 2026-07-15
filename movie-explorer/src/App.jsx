import MyRoutes from "./features/routes/MyRoutes"
import { BrowserRouter } from "react-router"

const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App