"use client"
import { postNewOrg } from '@/functions/apiRequest'
import React, { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'


const Button = ({ user }) => {
    const [showcomp, setShowcomp] = useState(false)
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orgdata = {
            userId: user.id,
            orgName: e.target[0].value,
            desc: e.target[1].value,
            admin: user.id,
            icon : img.name
        }
        const response = await postNewOrg(setShowcomp, orgdata)
        console.log(response)
    }
    return (
        <>
            <button className='bg-[teal] text-[white] py-2 px-4 rounded-md cursor-pointer' onClick={() => setShowcomp(!showcomp)}>
                Add New Organization
            </button>
            {
                showcomp &&
                <div className='flex flex-col items-center gap-3 justify-center'>
                    <div className='flex items-center justify-center md:w-[150px] w-[100px] h-[100px] md:h-[150px] rounded-full bg-[white] relative'>
                        <img src={img && URL.createObjectURL(img)} alt='' className='rounded-full md:w-[150px] w-[100px] h-[100px] md:h-[150px] ' />
                        <label htmlFor='add' className='absolute bottom-0 text-2xl'><AiFillCamera /></label>
                        <input type='file' style={{display:"none"}} id='add' onChange={(e)=>setImg(e.target.files[0])} />
                    </div>
                    <form action='submit' onSubmit={handleSubmit} className='flex flex-col gap-5 py-4 px-5 bg-[white] rounded-md'>
                        <input type='text' placeholder='enter organization Name' className='py-2 px-4 rounded-md border outline-none' />

                        <textarea style={{ resize: "none" }} placeholder='enter your desc' className='py-2 px-4 rounded-md border outline-none' />
                        {
                            loading ?
                                <div className='bg-[teal] py-2 px-4 rounded-md text-[white]'>uploading...</div>
                                :
                                <button className='bg-[teal] py-2 px-4 rounded-md text-[white]'>upload</button>
                        }
                    </form>
                </div>
            }
        </>
    )
}

export default Button
