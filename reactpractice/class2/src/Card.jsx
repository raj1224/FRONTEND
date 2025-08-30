import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-2 space-y-4 m-4 rounded-xl bg-white shadow-2xl border '> 
        {/* <img src="https://imgs.search.brave.com/5I4AIeKQ2xGycrElqHaE1Ta2Z3KTilPsBs6GtiasKDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emFybGEuY29tL2lt/YWdlcy96YXJsYS10/aGUtem9uZS0xeDEt/MjQwMHgyNDAwLTIw/MjQwMzA2LW1mN2o0/Ymo3NDg4eXEzN2Y5/eGhtLnBuZz9jcm9w/PTE6MSxzbWFydCZ3/aWR0aD0yNTAmZHBy/PTI" alt="image" />
        <h1>Random Image</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, </p> */}

        {/* Using PROPES */}
        <img className='border rounded-xl' src={props.imageUrl} alt="img" />
        <h1 className='text-2xl font-bold self-start'>{props.title}</h1>
        <p className='text-base font-semibold text-gray-500'> {props.description}</p>
    </div>

  )
}

export default Card