import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Event from './Pages/Event/Event'
import ContactUs from './Pages/ContactUs/ContactUs'

const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/events',
      element: <Event />
    },
    {
      path: '/contact',
      element: <ContactUs />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App