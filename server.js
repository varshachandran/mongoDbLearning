const express=require('express');
const connectDB=require('./DB/Connection');
const app=express();

connectDB();

app.use('/api/userModel',require('./Api/User'));
const port=process.env.port||3000;


app.listen(port,()=>console.log('server started'));

