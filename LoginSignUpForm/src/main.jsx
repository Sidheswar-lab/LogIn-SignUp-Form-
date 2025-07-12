import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import { Login } from './Components/Login.jsx'
import {Signup} from './Components/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    children:[
      {index: true, Component:Signup},
      {path: 'login', Component:Login}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
