import React from 'react'
import { Outlet } from 'react-router-dom'
import { store } from '../store/Store'
import { Provider } from 'react-redux'
import MyNavbar from './Navbar'


const RootLayout = () => {
  return (

<div>
    <Provider store={store}>
        <MyNavbar />
  <main>
    <Outlet />
  </main>
  </Provider>
</div>
  )
}

export default RootLayout