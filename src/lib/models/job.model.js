import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    orgId:{
        type:String,
        required:true
    },
    orgName:{
        type:String,
        required:true
    },
    postName:{
        type:String,
        required:true
    },
    location:{
        enum: ["hybrid", "onsite", "remote"]
    },
    place:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export const jobModel = mongoose.model('jobs', jobSchema)