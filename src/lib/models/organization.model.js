import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
    orgName:{
        type:String,
        required:true
    },
    admin:{
        type:String
    },
    hasAccess:{
        type:[String]
    }
},{
    timestamps:true
})

export const orgModel = mongoose.model('orgs',orgSchema)