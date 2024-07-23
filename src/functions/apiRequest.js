import axios from "axios"

export const getAJob = async (id) =>{
  try{
    const response = await axios.get(`http://localhost:3000/api/jobs/${id}`)
    return response.data;
  }catch(err){
    return err
  }
}

export const getAllJobsTogether = async () =>{
  try{
    const response = await axios.get("http://localhost:3000/api/jobs")
    return response.data
  }catch(err){
    return err
  }
}


export const getAllOrg = async () =>{
    try{
      const response = await axios.get("http://localhost:3000/api/organization")
      return response.data
    }catch(err){
      console.log(err)
    }
  }


export const postNewOrg = async (setShowcomp, data) =>{
  setShowcomp(true)
  try{
    const response = await axios.post("http://localhost:3000/api/organization",data)
    setShowcomp(false)
    return response.data
  }catch(err){
    setShowcomp(false)
    return err
  }
}








// get all jobs on the homepage and complete this project also watch lama new project also watch something node js dont waste time please phir rat ko guilt hoga 3 shift m ho jayega kaam aaram se koshish kr apne aap ko develop kr ok









