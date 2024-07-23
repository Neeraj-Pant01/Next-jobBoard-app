import React from 'react'
import Organization from '../components/Organization'
import axios from 'axios'
import { getAllOrg } from '@/functions/apiRequest'
import Button from '../components/Button'
import { getUser } from '@workos-inc/authkit-nextjs'

const page = async () => {
  const {user} = await getUser()

  const orgs = await getAllOrg();

  console.log(orgs)

  return (
    <div className='flex flex-col py-4 gap-4 bg-[lightgrey] items-center px-3 mt-3 text-[rgba(0,0,0,0.7)]'>
      <b className='py-3'>YOUR ORGANIZATIONS</b>
      <Button user={user} />
      {
        orgs.length > 0 ?
          orgs.map((item,i)=><Organization key={i} item={item} />)
          :
          <div className=''>You Don't Have any Organizations !</div>
      }
    </div>
  )
}

export default page
