const express = require("express");
const app = express();

app.get("/hello",(req,res)=>{
    return res.send("Hi iam from the sample node deployment ECS project !");
})

app.get("/test",(req,res)=>{
    return res.send("Hi I'am from the new test API !");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000 !");
})

//codebuild-my-new-codebuild-1-service-role
//AWSCodePipelineServiceRole-us-east-1-my-new-pip-1

// codebuild-my-nodejs-be-ecs-codebuild-service-role