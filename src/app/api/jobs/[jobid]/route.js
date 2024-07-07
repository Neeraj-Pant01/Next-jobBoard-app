import { jobModel } from "@/lib/models/job.model";

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
    try{

    }catch(err){
        return Response.json(err)
    }
}