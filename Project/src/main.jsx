import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import CartContextProvider from './Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider>
      <App />
    </CartContextProvider>
)
