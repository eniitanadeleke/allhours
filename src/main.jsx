import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import '@fontsource-variable/bodoni-moda'
import '@fontsource-variable/bodoni-moda/wght-italic.css'
import '@fontsource-variable/schibsted-grotesk'
import './styles.css'
import App from './App'

// The single-file preview build has no server routing, so it keeps routes in memory.
const Router = import.meta.env.VITE_PREVIEW ? MemoryRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
