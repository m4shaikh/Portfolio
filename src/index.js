import React from 'react'

import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

// TODO:  Add mouse-trail, work page
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HashRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </HashRouter>
  </React.StrictMode>
)

reportWebVitals()
