import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import packageConfig from '../package.json'
import './index.css'

console.log(' %c MiaoHome %c ' + packageConfig.version + ' %c https://github.com/MiaoMint/MiaoHome',
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:#ff9a9a ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  'background:unset ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff')


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
