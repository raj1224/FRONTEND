import React from 'react'

function Avatar({imageUrl,Name}) {
  return (
    <div className='flex flex-col justify-center items-centermt-14'>

        <img height={200} width={200} className='border-2 border-yellow-400 rounded-full' src={imageUrl} alt="avatar" />
        <h2 className='rounded-sm text-3xl text-white font-bold mt-4 px-2 py-2 border border-indigo-400 border-dashed text-center'>{Name}</h2>
    </div>
  )
}

export default Avatar