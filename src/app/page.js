import React from 'react'
import Hero from './components/Hero'
import Joblist from './components/Joblist'
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
} from '@workos-inc/authkit-nextjs';
import { getAllJobsTogether } from '@/functions/apiRequest';

const Home = async () => {

    const { user } = await getUser();

    const signInUrl = await getSignInUrl();

    const signUpUrl = await getSignUpUrl();

    let jobs = await getAllJobsTogether()

  return (
    <div className='md:px-4 px-2 my-5'>
      <Hero />
      <div className='flex flex-col bg-[lightgrey] md:py-4 py-2 px-2 md:px-6 md:max-w-6xl md:mx-auto rounded-md gap-3'>
        <b className='mb-4'>Recent Jobs</b>
        {
          jobs.map((j,i)=><Joblist key={i} j={j} />)
        }
        {/* <Joblist />
        <Joblist />
        <Joblist />
        <Joblist />
        <Joblist /> */}
      </div>
    </div>
  )
}

export default Home
