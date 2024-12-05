import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes,  } from 'react-router-dom'
import App from './App.jsx'
import About from './component/Header/HeaderElements/About.jsx'
import AddEvents from './component/Header/HeaderElements/AddEvents.jsx'
import Profile from './component/Profile/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  >
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>} />
      <Route path='aboutus' element={<About/>} />
      <Route path='addevent' element={<AddEvents/>} />
      </Route>
      <Route path='profile' element={<Profile/>}/>
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
