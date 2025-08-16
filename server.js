const express = require("express");
const app = express();

app.get("/hello",(req,res)=>{
    return res.send("Hi iam from the sample node deployment ECS project !");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000 !");
})

//codebuild-my-new-codebuild-1-service-role