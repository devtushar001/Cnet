import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import EscomContextProvider from './Context/escomContext.jsx'

createRoot(document.getElementById('root')).render(
  <EscomContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EscomContextProvider>

)