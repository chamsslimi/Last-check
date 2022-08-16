const express=require('express');
const connectDB=require('./config/connection')
const app=express();
const authRouter=require("./routes/auth")
const userRouter=require("./routes/user")

connectDB();
app.use(express.json())
app.use('/api/dogs',require('./routes/Club'))
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


const port=5000;

app.listen(port,()=>console.log(`server is runnig on port ${port}`));