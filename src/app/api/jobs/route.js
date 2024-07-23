import { jobModel } from "@/lib/models/job.model";
import mongoose from "mongoose";

if(mongoose.connection.readyState === 0){
    mongoose.connect(`${process.env.DBURI}`).then(()=>{
        console.log("database is connected successfully !")
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const GET = async (request, content) =>{
    try{
        const jobs = await jobModel.find();
        return Response.json(jobs)
    }catch(err){
        return Response.json(err)
    }
}
