import ReactDOM from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
// css imports
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
