// ASSIGNMENT
import React, { useEffect, useState } from 'react'
import Avatar from './module/profile/components/Avatar'
import InfoCard from './module/profile/components/InfoCard'

const htmlDarkClassName=document.getElementById('mainroot').classList[0];

function App() {
  const [data, setdata] = useState(null);
  const [darkMode, setDarkMode] = useState(htmlDarkClassName);
  const onToggleTheme=()=>{
    setDarkMode(darkMode ==="dark"? "light":"dark");
    document.getElementById('mainroot').classList.toggle('dark');
  }


  // console.log(htmlDarkClassName);
  
  
  useEffect(() => {
    async function fetchUserDetails(username) {
      const res = await fetch(`https://api.github.com/users/${username}`)
      const profileData = await res.json();
      setdata(profileData)
      // try {
      //   const res = await fetch(`https://api.github.com/users/${username}`)
      //   const profileData = await res.json();
      //   setdata(profileData)
      // } catch (error) {
      //   console.error("Failed to fetch user details:", error);
      // }
    }
    fetchUserDetails('raj1224')
  }, [])
  
  console.log(data);
  
  // 🛠 If data is still null, show loading message
  if (!data) {
    return (
      <main className="bg-zinc-900 w-full py-24 flex flex-col justify-center items-center min-h-screen h-full">
        <h1 className="text-3xl text-yellow-500 font-bold">Loading...</h1>
      </main>
    );
  }
  
  return (
    <main className='bg-amber-50 dark:bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen h-full'>

      <button onClick={onToggleTheme} className='cursor-pointer px-4 py-4 h-20 rounded-full border border-zinc-500 text-3xl'>
        {darkMode==="dark" ? '☀️' : '🌙'}
      </button>
      <h1 className='text-5xl text-yellow-500 font-extrabold stroke-2'>welcome to your Github Profile 🔥</h1>
      <Avatar 
        // imageUrl={'https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250'}
        // Name={'Hossein'}
        imageUrl={data.avatar_url}
        Name={data.login}
      />
      <div className='grid grid-cols-3 gap-4 w-full max-w-2xl'>
      {/* <InfoCard count={'12M'} title={'Followers'}/>
      <InfoCard count={'12M'} title={'Following'}/>
      <InfoCard count={'12M'} title={'Repos'}/> */}

      <InfoCard count={data.followers} title={'Followers'}/>
      <InfoCard count={data.following} title={'Following'}/>
      <InfoCard count={data.public_repos} title={'Repos'}/>

      </div>
    </main>
  )
}

export default App







// // import React from 'react'
// // import Card from './Card'

// // function App() {
// //   return (
// //     // <div>
// //     //   <h1 className='text-3xl text-red-500'>hello</h1>
// //     // </div>
// //     <>
// //       {/* <Card/> */}


// //       {/* Using Propes */}
// //       <Card
// //        imageUrl={'https://imgs.search.brave.com/5I4AIeKQ2xGycrElqHaE1Ta2Z3KTilPsBs6GtiasKDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emFybGEuY29tL2lt/YWdlcy96YXJsYS10/aGUtem9uZS0xeDEt/MjQwMHgyNDAwLTIw/MjQwMzA2LW1mN2o0/Ymo3NDg4eXEzN2Y5/eGhtLnBuZz9jcm9w/PTE6MSxzbWFydCZ3/aWR0aD0yNTAmZHBy/PTI'}
// //        title={'Random IMage'}
// //        description={"this is the description of the image"}
// //        />
// //     </>
// //   )
// // }

// // export default App


// GPT SOLUTION
// import React, { useEffect, useState } from 'react'
// import Avatar from './module/profile/components/Avatar'
// import InfoCard from './module/profile/components/InfoCard'

// function App() {
//   const [data, setData] = useState(null);
  
//   useEffect(() => {
//     async function fetchUserDetails(username) {
//       try {
//         const res = await fetch(`https://api.github.com/users/${username}`)
//         const profileData = await res.json();
//         setData(profileData)
//       } catch (error) {
//         console.error("Failed to fetch user details:", error);
//       }
//     }
//     fetchUserDetails('raj1224')
//   }, [])
  
//   console.log(data);
  
//   // 🛠 If data is still null, show loading message
//   if (!data) {
//     return (
//       <main className="bg-zinc-900 w-full py-24 flex flex-col justify-center items-center min-h-screen h-full">
//         <h1 className="text-3xl text-yellow-500 font-bold">Loading...</h1>
//       </main>
//     );
//   }

//   return (
//     <main className=' bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen h-full'>
//       <h1 className='text-5xl text-yellow-500 font-extrabold stroke-2'>
//         welcome to your Github Profile 🔥
//       </h1>

//       {/* ✅ Now safe to access data */}
//       <Avatar 
//         imageUrl={data.avatar_url}
//         Name={data.login}
//       />

//       <div className='grid grid-cols-3 gap-4 w-full max-w-2xl'>
//         <InfoCard count={data.followers} title={'Followers'}/>
//         <InfoCard count={data.following} title={'Following'}/>
//         <InfoCard count={data.public_repos} title={'Repos'}/>
//       </div>
//     </main>
//   )
// }

// export default App
