import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {createBrowserRouter , createRoutesFromElements , RouterProvider, Route} from 'react-router-dom'
import App from './App.jsx'
import Layout from './layout.jsx'
import Collections from './components/collections.jsx'
import {header , footer, Home} from './components/index.jsx'
import Profile from './components/profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='collections' element={<Collections/>} />
      <Route path='profile' element={<Profile/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
