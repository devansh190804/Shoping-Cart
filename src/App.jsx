import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from "./components/products"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'
import MyNavbar from './components/Navbar'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
       <Route index element={<Dashboard />}></Route>
       <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className='App'>
    {/* < Products /> */}
   {/* < MyNavbar /> */}
    <RouterProvider router={router} />


    </div>
  )
}

export default App
