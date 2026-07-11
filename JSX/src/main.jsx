import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from './App.jsx'
import './style.css'
import WorldCupTeams from "./WorldCupTeams.jsx"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <WorldCupTeams />
    </StrictMode>
)