import { jobModel } from "@/lib/models/job.model";

export const POST = async (request, content) =>{
    const jobData = await request.json();
    try{
       const newJob = new jobModel(jobData) 
       const savedJob = await newJob.save();
       return Response.json(savedJob)
    }catch(err){
        return Response.json(err)
    }
}

export const GET = async (request, content) =>{
    try{
        const jobs = await jobModel.find();
        return Response.json(jobs)
    }catch(err){
        return Response.json(err)
    }
}