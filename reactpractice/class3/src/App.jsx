// import React, { useState } from 'react'

import { useEffect, useState } from "react";

function App() {
  // USESTATE
  // const [age, setage] = useState(0)


  // USEEFFECT
  // const [time, settime] = useState(new Date().toLocaleTimeString())
  const [time, settime] = useState(0)
  // setInterval(() => {
  //   settime(new Date().toLocaleTimeString())
  // }, 1000);

  // without dependency array
  useEffect(()=>{
    console.log('rendering.....');
    setTimeout(() => {
      settime(time+1)
    }, 1000);
  })

  // with empty dependency array
  useEffect(()=>{
    console.log('rendering.....');
    setTimeout(() => {
      settime(time+1)
    }, 1000);
  },[]) 

  // with dependency array
  useEffect(()=>{
    console.log('rendering.....');
    setTimeout(() => {
      settime(time+1)
    }, 1000);
  },[time])
  return (
    // <div>
    //   {/* how to use usestate */}
    //   <h1>your age is {age}</h1>
    //   <button className='px-2 py-1 bg-green-400 border' onClick={() => setage(age + 1)}>increment</button>
    //   <button className='px-2 py-1 bg-red-400 border'  onClick={() => setage(age - 1)}>decrement</button>
    //   <button className='px-2 py-1 bg-white border'  onClick={() => setage(0)}>reset</button> 
    // </div>

    // <main >
      
    //   {/* ASSIGNMENT :- Adding dark and light mode */}
      
    // </main>

    <main>
      {/* USEEFFECT */}
      <h1>the current time is {time}</h1>
    </main>
  )
}

export default App