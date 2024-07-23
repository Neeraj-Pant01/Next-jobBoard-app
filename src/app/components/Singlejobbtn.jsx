"use client"
import React, { useState } from 'react'

const Singlejobbtn = () => {
    const [applied, setApplied] = useState(false)
  return (
    <button style={{cursor : `${applied ? "not-allowed" : "pointer"}`}} className={`py-2 mt-8 px-4 ${applied ? 'bg-[#accece]' : 'bg-[teal]'} text-[white] rounded-md`} onClick={()=>setApplied(true)}>{applied ? 'applied' : "apply"}</button>
  )
}

export default Singlejobbtn
