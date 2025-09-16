import React from 'react'
import {createBrowserRouter , RouterProvider, NavLink} from 'react-router-dom'

const App = () => {
  //
  // OPTIMIZED
  // ---------
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <h1>Home Page</h1>
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <h1>About Page</h1>
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <h1>Contact Page</h1>
        </>
      ),
    },
  ]);

  return (
    <>
    
      {/* <Navbar/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App

function Navbar(){
  return(
    <div>
      {/* <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul> */}

      {/* <nav>
        <NavLink to={'/'}>
        <li>Home</li></NavLink>
        <NavLink to={'/About'}>
        <li>About</li></NavLink>
        <NavLink to={'/Contact'}>
        <li>Contact</li></NavLink>
      </nav> */}

      {/* OPTIMIZED */}
      {/* --------- */}

      <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}