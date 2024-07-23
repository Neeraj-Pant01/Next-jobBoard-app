"use client"
import axios from 'axios'
import React, { useState } from 'react'

const AddNewPost = ({user, id }) => {


const [loading, setLoading] = useState(false)
const [postDetails, setPostDetails] = useState({
    creatorId: user?.id,
    postName: "",
    location: "",
    place: "",
    country: ""
  })



  const handleUpload = async (e) => {
    setLoading(true)
    try {
      const response = await axios.post(`http://localhost:3000/api/jobs/${id}`, postDetails)
      console.log(response)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
    setPostDetails({
      postName: "",
      location: "",
      place: "",
      country: ""
    })

  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails((pre) => {
      return {
        ...pre, [name]: value
      }
    })
  }


  return (
    <div className='flex md:w-[70%] mb-4 flex-col gap-3 mt-3'>
      
      {/* <div className='flex flex-col'>
        <label className='font-semibold'>OrgName</label>
        <input value={postDetails.orgName} name='orgName' type='text' onChange={handleChange} className='border outline-none py-2 rounded-md' />
      </div> */}

      <div className='flex flex-col'>
        <label className='font-semibold'>Post Name</label>
        <input value={postDetails.postName} type='text' onChange={handleChange} name='postName' className='border outline-none py-2 rounded-md' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Location</label>
        <select name='location' onChange={handleChange} className='border outline-none py-2 rounded-md'>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">Onsite</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Place</label>
        <input type='text' value={postDetails.place} onChange={handleChange} name='place' className='border outline-none py-2 rounded-md' />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold'>Country</label>
        <input type='text' value={postDetails.country} onChange={handleChange} name='country' className='border outline-none py-2 rounded-md' />
      </div>
      {loading ?
        <div className='py-2 px-4 text-[white] bg-[teal] rounded-md'>uploading...</div>
        :
        <button className='py-2 px-4 text-[white] bg-[teal] rounded-md' onClick={handleUpload}>upload</button>
      }
    </div>
  )
}

export default AddNewPost
