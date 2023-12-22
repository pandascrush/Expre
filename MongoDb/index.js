import { error } from "console";
import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
mongoose
    .connect(process.env.MONGO_DB,{
    })
    .then(()=>
    app.listen(process.env.PORT, ()=>
    console.log(`app listening on port${PORT}`))
    )
    .catch((error)=>console.log(error))
