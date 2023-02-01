import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './Context/ContextStore'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <ContextProvider>
    <App />
      </ContextProvider> 
  </BrowserRouter>
)


