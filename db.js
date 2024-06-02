import mongoose from "mongoose";

const connectDB = async () =>{
    const MONGODB_URL = process.env.MONGODB_URL
    try{
        const DB_OPTIONS = {
            dbName :"Portfolio"
        }
        await mongoose.connect(MONGODB_URL,DB_OPTIONS)
        console.log('Connected Successfully...');
    } 
    catch(error){
        console.log(error)
    }
}

export default connectDB