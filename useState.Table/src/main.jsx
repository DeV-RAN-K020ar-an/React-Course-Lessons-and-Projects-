import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from './App.jsx'
import './index.css'
import { ToastContainer, Zoom } from "react-toastify"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <ToastContainer theme="dark" position="bottom-left" autoClose={2000} transition={Zoom} />
    </StrictMode>
)