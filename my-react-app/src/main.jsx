// Archivos de punto de entrada para una aplicación React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importación de los estilos 
import './index.css'
// Importación del componente principal de la App
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
