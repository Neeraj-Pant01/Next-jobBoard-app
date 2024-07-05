import React from 'react'
import {AiFillHeart} from "react-icons/ai"

const Joblist = () => {
  return (
    <div className='flex items-center bg-[white] shadow-md py-2 rounded-lg px-4 gap-4'>
      <div className='flex'>
        <img src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png' className='size-12' />
      </div>
      <div className='flex flex-col grow relative'>
        <div className="absolute right-0">
            <AiFillHeart className='text-[darkgrey] text-3xl cursor-pointer' />
        </div>
        <div className='flex text-sm text-[grey]'>
            amazon
        </div>
        <div className='flex text-lg font-bold'>
            Project Manager
        </div>
        <div className="flex md:items-center md:justify-between w-[100%] text-sm text-[grey] flex-col md:flex-row">
            <div className='flex'>
            Remote &bull;
            Banglore
            </div>
            <div className='flex'>
                1 minute ago
            </div>
        </div>
      </div>
    </div>
  )
}

export default Joblist
