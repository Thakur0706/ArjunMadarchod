import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import productRoutes from "./routes/product.route.js"
import cors from "cors"

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors())

app.use("/api/products",productRoutes)


app.listen(5000 ,() => {
  connectDB();
  console.log("Server started at 5000 ")

})

