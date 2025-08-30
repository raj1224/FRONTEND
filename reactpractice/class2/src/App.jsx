import React from 'react'
import Card from './Card'

function App() {
  return (
    // <div>
    //   <h1 className='text-3xl text-red-500'>hello</h1>
    // </div>
    <>
      {/* <Card/> */}


      {/* Using Propes */}
      <Card
       imageUrl={'https://imgs.search.brave.com/5I4AIeKQ2xGycrElqHaE1Ta2Z3KTilPsBs6GtiasKDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emFybGEuY29tL2lt/YWdlcy96YXJsYS10/aGUtem9uZS0xeDEt/MjQwMHgyNDAwLTIw/MjQwMzA2LW1mN2o0/Ymo3NDg4eXEzN2Y5/eGhtLnBuZz9jcm9w/PTE6MSxzbWFydCZ3/aWR0aD0yNTAmZHBy/PTI'}
       title={'Random IMage'}
       description={"this is the description of the image"}
       />
    </>
  )
}

export default App