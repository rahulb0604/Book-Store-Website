const express=require("express");
const app=express();
const cors=require("cors");
const bookroute=require("./routes/bookroute");

require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/api/v1",bookroute);

app.listen(5000,()=>{
    console.log("Server started successfully");
})