import React from 'react'
import { Button } from './components/ui/button'
import Navigation from './components/ui/Navigation'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
        {/* <Button>click me</Button> */}

        <Navigation/>
        {/* Routes:container for all our routed definations each route components defines a path and the Components to render */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<h1>About page</h1>}/>
          <Route path='/project' element={<h1>Projects page</h1>}/>
          <Route path='/contact' element={<h1>Contact page</h1>}/>

          {/* Catch-all route for 404 erros
          the * path matches any route that has not been matched above
          this should always be the last route */}

          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>


    </>
  )
}

export default App