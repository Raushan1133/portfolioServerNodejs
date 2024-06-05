import mongoose from "mongoose";

const connectDB = async () =>{
    // const MONGODB_URL = process.env.MONGODB_URL
    try{
        const DB_OPTIONS = {
            dbName :"Portfolio"
        }
        await mongoose.connect('mongodb://localhost:27017',DB_OPTIONS)
        console.log('Connected Successfully...');
    } 
    catch(error){
        console.log(error)
    }
}

export default connectDB