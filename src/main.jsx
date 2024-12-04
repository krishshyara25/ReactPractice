import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jbl from './Jbl.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jbl/>
  </StrictMode>,
)
