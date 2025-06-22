import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserContext } from './Hooks/Context.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router><UserContext>
      <App /></UserContext>
    </Router>
  </StrictMode>,
)