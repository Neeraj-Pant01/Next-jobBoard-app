import { jobModel } from "@/lib/models/job.model"
import { orgModel } from "@/lib/models/organization.model"
import mongoose from "mongoose"

if(mongoose.connection.readyState === 0){
    mongoose.connect(`${process.env.DBURI}`).then(()=>{
        console.log("database is connected successfully !")
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const GET = async (request, content) => {
    const { org } = content.params
    try {
        const organization = await orgModel.findById(org)
        const jobs = await jobModel.find({orgId:org})
        return Response.json({organization:organization, jobs:jobs})
    } catch (err) {
        return Response.json(err)
    }
}

export const PUT = async (request, content) => {
    const { org } = content.params
    const updatedData = await request.json()
    try {
        const organization = await orgModel.findById(req.params.id)

        if (!organization) return Response.json({ message: "nor organization found with this id" })

        if (organization.admin === "" || organization.hasAccess.includes("")){
            const updatedOrg = await orgModel.findByIdAndUpdate(org, {
                $set: updatedData
            }, {
                new: true
            })

        return Response.json(updatedOrg)
        }else{
            return Response.json({message:"you don't have access !"})
        }

    } catch (err) {
        return Response.json(err)
    }
}


export const DELETE = async (request, content) => {
    const { org } = content.params;
    try {
        const organization = await orgModel.findById(org)
        if (!organization) return Response.json({ message: "no organization found" })
        if (organization.admin === "" || organization.hasAccess.includes()){
            await orgModel.findByIdAndDelete(org)
            return Response.json({message:"org deleted successfully !"})
        }else{
            return Response.json({message:"you don't have access to delete the Organization !"})
        }
    } catch (err) {
        return Response.json(err)
    }
}