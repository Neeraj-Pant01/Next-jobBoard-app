import Link from 'next/link'
import React from 'react'

const Organization = ({item}) => {
  return (
    <div className='flex max-w-2xl bg-[white] px-2 py-3 rounded-lg gap-2'>
      <img src={item?.icon ||
        'https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png'} className='size-12 mt-2 rounded-full' alt='' />

      <div className='flex flex-col'>
        <span className='font-semibold text-[grey] text-lg'>{item.orgName}</span>
        <span className='font-bold'>About</span>
        <p className='text-grey text-sm'>{item?.desc}</p>
        <Link href={`/jobs/${item._id}`} className='py-2 text-center bg-[teal] rounded-md text-[white] mt-2 px-4'>add a new job Post</Link>
      </div>
      
    </div>
  )
}

export default Organization
