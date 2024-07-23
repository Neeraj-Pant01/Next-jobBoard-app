import AddNewPost from '@/app/components/AddNewPost'
import Joblist from '@/app/components/Joblist'
import { getUser } from '@workos-inc/authkit-nextjs';
import axios from 'axios';
import React from 'react'

const page = async ({ params }) => {
const { user } = await getUser();
    const { orgid } = params;
    let jobs = [];
    const data = await axios.get(`http://localhost:3000/api/organization/${orgid}`)

    jobs = data.data.jobs
    let org = data.data.organization;

    return (
        <div className='pb-5'>
            <div className='flex items-center justify-center px-5 gap-2 my-4'>
                <span className='font-bold text-lg text-[grey]'>ORGANIZATION :</span>
                <span className='text-lg font-semibold'>{org.orgName}</span>
            </div>
            <div className='my md:flex md:flex-col md:items-center md:justify-center-4 px-3'>
                <div className='font-bold text-[grey] divorder w-[100%] text-center'>Add New Job Post</div>
                <AddNewPost user={user} id={orgid}/>
            </div>
            <div className='flex flex-col bg-[lightgrey] md:py-4 py-2 px-2 md:px-6 md:max-w-6xl md:mx-auto rounded-md gap-3'>
                <b>Previous Jobs</b>
                {
                    jobs.map((j,i)=>{
                        return (
                            <Joblist key={i} j={j}/>
                        )
                    })
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

export default page
