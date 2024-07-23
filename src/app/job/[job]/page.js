import Singlejobbtn from '@/app/components/Singlejobbtn';
import { getAJob } from '@/functions/apiRequest';
import React from 'react'

const page = async ({params}) => {
  const {job} = params;

  const currentjob = await getAJob(job)

  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-3'>
      <img className='w-[80px] h-[80px] rounded-full' src={currentjob?.icon || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQWcA-aoPsU-drPn8HcbWlGrZZhua5v-08w&s"} alt='' />
      <div className='flex items-center gap-3'>
        <b>ORGANIZATION : </b>
      <b className='text-xl'>{currentjob?.orgName}</b>
      </div>
      </div>
        <div className='flex items-center gap-4'>
          <b>Position</b>
          <b>{currentjob?.postName}</b>
        </div>
        <div className='flex items-center gap-4'>
          <b>Location</b>
          <b>{currentjob?.location || "hybrid"}</b>
        </div>
        <div className='flex items-center gap-4'>
          <b>Place</b>
        <b>{currentjob?.place}</b>
        </div>
        <div className='flex items-center gap-4'>
          <b>country</b>
        <b>{currentjob?.country}</b>
        </div>
        <Singlejobbtn />
      </div>
  )
}

export default page
