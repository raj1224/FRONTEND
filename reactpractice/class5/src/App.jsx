import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <><Navbar/> <h1>Home Page</h1></>
    },
    {
      path: "/login",
      element: <><Navbar/> <h1>Login</h1></>
    },
    {
      path:'/about',
      element:<><Navbar/> <h1>About Page</h1></>
    }
    
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App

function Navbar() {
  return(
    <div>
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">contact</a></li>
      </ul>
    </div>
  )
}