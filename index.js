//use .env file
require('dotenv').config()

const express=require("express")
const app=express()
const port=8080

//use the dotenv
app.listen(process.env.PORT,()=>{
    console.log(`your port ${port} is start`);
})

app.get("/",(req,res)=>{
    res.send("hello amit kaise ho")
})