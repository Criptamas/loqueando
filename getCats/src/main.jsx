import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import './index.css'
import { App } from './App'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
