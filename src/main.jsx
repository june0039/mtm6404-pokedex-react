import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pokedex from './routes/Pokedex'
import Pokemon from './routes/Pokemon'
import Items from './routes/Items'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pokedex />
      },
      {
        path: '/pokemon',
        element: <Pokemon />

      },
      {
        path: '/Items',
        element: <Items />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)

