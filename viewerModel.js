import mongoose from "mongoose";

const viewerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        },
    subject:{
        type:String,
        required:true
    },
    messege:{
        type:String,
        required:true
    }
});

const viewerModel = mongoose.model('viewers',viewerSchema);

export default viewerModel;