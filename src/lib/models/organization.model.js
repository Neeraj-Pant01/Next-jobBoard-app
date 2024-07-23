import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:false
    },
    orgName:{
        type:String,
        required:true
    },
    admin:{
        type:String
    },
    desc:{
        type:String,
        required:true
    },
    hasAccess:{
        type:[String]
    }
},{
    timestamps:true
})

export const orgModel = mongoose.models.orgs || mongoose.model('orgs',orgSchema)