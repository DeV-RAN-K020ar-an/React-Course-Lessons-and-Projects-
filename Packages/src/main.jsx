import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, Zoom } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer theme='dark' /* theme='colored' && theme='light'  */ autoClose={1000} position='bottom-right' transition={Zoom} />
  </StrictMode>,
)
