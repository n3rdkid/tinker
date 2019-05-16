const express= require('express');
const app=express();
app.get('/',(req,res)=>res.send("Hi"));
const port = process.env.port || 5000;
app.listen(port,()=>console.log(`Server is running on port ${port} `));