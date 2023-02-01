import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './Context/ContextStore'
import { ErrorBoundary } from 'react-error-boundary'
import {ErrorFallback} from '../src/component/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
      <ContextProvider 
      >
        <App />
      </ContextProvider>
    </BrowserRouter>
  </ErrorBoundary>
)


