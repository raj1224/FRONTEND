import React, { useState } from 'react'
import {Toaster, toast} from 'react-hot-toast'
import { BeatLoader } from 'react-spinners';
import Avatar from './module/profile/components/Avatar'
import InfoCard from './module/profile/components/InfoCard'

function App() {

  const [Username, setUsername] = useState('')
  const [isPending, setisPending] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      setisPending(true);
      const res = await fetch(`https://api.github.com/users/${Username}`);
      const data = await res.json();

      if (data.message === "Not Found") {
      toast.error("User Not Found");
      return;
    }

      setData(data);
      toast.success('User Found');
    } catch (error) {
      toast.error('User Not Found');
    }
    finally{
      setisPending(false);
    }
  }
  return (
    <div className='bg-amber-50 dark:bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen'>
      <h1 className='text-5xl text-yellow-500 font-extrabold stroke-2'>Welcome to Your Github Profile</h1>

      <Toaster />
      <div className='flex flex-row justify-center gap-3 items-center py-24 w-full'>
        <form 
        onSubmit={onSubmit}
        className=' w-full flex flex-row justify-center items-center'
        >
        <input type="text" placeholder='Enter Your Github Username' className='px-4 py-4 rounded-md border border-zinc-500 bg-black/90 text-white max-w-3xl  ' 
          value={Username}
          onChange={
            (e) => setUsername(e.target.value)
          }
        />
        <button
        disabled={isPending} type='submit' className='px-4 py-4 rounded-md bg-indigo-400 hover:bg-indigo-500 font-semibold text-white'>
          {isPending ? "Searching..." : "Search"}
        </button>

        </form>
      </div>
      {
        isPending &&(
           <div className='flex flex-row gap-3 justify-center py-24 w-full' >
                {/* <BeatLoader color="#000" /> */}
                <BeatLoader  color='#ffd700' size={10}/>
           </div>
        )
      }
      {/* {
        data && !isPending && (
           <div className='flex flex-col justify-center items-center gap-8 w-full'>

            <Avatar 
            imageUrl={data.avatar_url}
            Name={data.login}
            />
     
            <div className='grid grid-cols-3 gap-4 w-full max-w-2xl'>

            <InfoCard count={data.followers} title={'Followers'}/>
            <InfoCard count={data.following} title={'Following'}/>
            <InfoCard count={data.public_repos} title={'Repos'}/>
            </div>

      </div>
        )
      } */}

      {
        data ===null
      }
      
    </div>
  )
}

export default App