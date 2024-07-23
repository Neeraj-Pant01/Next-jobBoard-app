import { getSignInUrl, getUser, signOut } from '@workos-inc/authkit-nextjs';
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();  
    return (
        <div className='flex items-center bg-[white] justify-between py-2 md:px-5 px-2 sticky top-0'>
            <Link href={'/'} className='flex items-center font-bold text-xl md:text-2xl text-[grey]'>
                JobBoard
            </Link>
            <div className='flex items-center gap-2'>
                {
                    user ?
                        <form
                            action={async () => {
                                'use server';
                                await signOut();
                            }}
                        >
                            <button type='submit' className='bg-[lightgrey] rounded-md py-2 px-4'>LogOut</button>
                        </form>
                        :
                        <Link href={signInUrl} className='bg-[lightgrey] rounded-md py-2 px-4'>Login</Link>
                }
                <Link href={'/jobs'} className='bg-blue-600 rounded-md text-[white] py-2 px-4'>Add Job</Link>
            </div>
        </div>
    )
}

export default Navbar
