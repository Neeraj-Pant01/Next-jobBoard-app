import { jobModel } from "@/lib/models/job.model";
import { orgModel } from "@/lib/models/organization.model";
import mongoose from "mongoose";

if(mongoose.connection.readyState === 0){
    mongoose.connect(`${process.env.DBURI}`).then(()=>{
        console.log("database is connected successfully")
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const POST = async (request, content) =>{
    const {jobid} = content.params;
    const jobData = await request.json();
    try{
        const org = await orgModel.findById(jobid)
       const newJob = new jobModel({
        ...jobData,
        orgId:org._id,
        orgName: org.orgName,
       }) 
       const savedJob = await newJob.save();
       return Response.json(savedJob)
    }catch(err){
        return Response.json(err)
    }
}

export const GET = async (request, content) =>{
    const {jobid} = content.params;
    try{
        const job = await jobModel.findById(jobid);
        return Response.json(job)
    }catch(err){
        return Response.json(err)
    }
}

export const PUT = async (request, content) =>{
    const {jobid} = content.params;
    const updatedData = await request.json();
    try{
        const job = await jobModel.findById(jobid)
        const organization = await orgModel.findById(job.orgId)
        if(organization.admin === job.creatorId || organization.hasAccess.includes(job.creatorId)){
            await jobModel.findByIdAndUpdate(jobid, {
                $set : req.body
            })
            return Response.json({message:"job updated"})
        }else{
            return Response.json({message:"access denied !"})
        }
    }catch(err){
        return Response.json(err)
    }
}

export const DELETE = async (request, content) =>{
    const {jobid} = content.params;
    try{
        const job = await jobModel.findById(jobid)
        const organization = await orgModel.findById(job.orgId)
        if(organization.admin === job.creatorId || organization.hasAccess.includes(job.creatorId)){
            await jobModel.findByIdAndDelete(jobid)
            return Response.json({message:"job deleted"})
        }else{
            return Response.json({message:"access denied !"})
        }
    }catch(err){
        return Response.json(err)
    }
}
