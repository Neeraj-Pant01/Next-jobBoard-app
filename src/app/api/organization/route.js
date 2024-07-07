import { orgModel } from "@/lib/models/organization.model";
import mongoose from "mongoose";

if(mongoose.connection.readyState === 0){
    mongoose.connect(`${process.env.DBURI}`).then(()=>{
        console.log("database is connected successfully !")
    }).catch((err)=>{
        console.log(err.message)
    })
}

// data comes in request or first parameter
// params comes in content parameter or second parameter

export const POST = async (request, content) =>{
    const orgInfo = await request.json()
    try{
        const neworg = new orgModel(orgInfo)
        const savedOrg = await neworg.save();
        return Response.json(savedOrg)
    }catch(err){
        return Response.json(err)
    }
}

export const GET = async () =>{
    try{
        const organizations = await orgModel.find();
        return Response.json(organizations)
    }catch(err){
        return Response.json(err)
    }
}
