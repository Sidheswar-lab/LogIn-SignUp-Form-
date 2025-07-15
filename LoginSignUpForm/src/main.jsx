import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Login } from './Components/Login.jsx'
import { Signup } from './Components/Signup.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Signup },
      { path: 'login', Component: Login }
    ]
  }
])
const CLIENT_ID = '699334000039-5cm1fonajgmgd69vdj9esq0jg0o9alcn.apps.googleusercontent.com'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </GoogleOAuthProvider>
)
