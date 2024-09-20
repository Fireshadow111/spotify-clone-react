import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
config()

import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';


//app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary()



//middlewares

app.use(express.json())
app.use(cors())


// initializing routes

app.use('/api/song', songRouter)
app.use('/api/album', albumRouter)

app.get('/',(req, res)=>res.send("API Working"))

app.listen(port,()=>console.log(`Server Started on ${port}`))