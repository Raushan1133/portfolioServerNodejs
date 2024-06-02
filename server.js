import express from 'express'
const app = express();
import connectDB from './db.js';
import viewerModel from './viewerModel.js';
import dotenv from 'dotenv'
import cors from 'cors'
app.use(cors())
dotenv.config();
app.use(express.json());
connectDB();

app.get('/',(req,res)=>{
    res.send("Hello world");
})



app.post('/submit',async(req,res)=>{
    try{
        const {firstName , lastName, email , subject, messege} = req.body;
        if(firstName && lastName && email && subject && messege){
            const data = new viewerModel({
                firstName:firstName,
                lastName:lastName,
                email:email,
                subject:subject,
                messege:messege
            });
            await data.save();
            res.send({"status":"success","messege":"Form submitted successfully"});
        }else{
            res.send({"status":"failed","messege":"All fields are required"});
        }
    }
    catch(err){
        res.send({"status":"Failed","messege":"Internal server error"});
    }
})

const port = process.env.PORT;

app.listen(port,()=>{console.log(`Server is listening at port ${port}`)})
