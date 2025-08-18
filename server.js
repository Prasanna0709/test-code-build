const express = require("express");
const app = express();

app.get("/hello",(req,res)=>{
    return res.send("Hi iam from the sample node deployment ECS project !");
})

app.get("/test",(req,res)=>{
    return res.send("Hi I'am from the new test API !");
})

app.get("/test2",(req,res)=>{
    return res.send("Hi I'am from the new test API 2 ....!");
})

app.get("/test3",(req,res)=>{
    return res.send("3rd API ....");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000 !");
})

//codebuild-my-new-codebuild-1-service-role
//AWSCodePipelineServiceRole-us-east-1-my-new-pip-1

// codebuild-my-nodejs-be-ecs-codebuild-service-role
//:aws:elasticloadbalancing:us-east-1:076542168620:targetgroup/my-nodejsbe-tg/d11c683cc4452cd6

//arn:aws:ecs:us-east-1:076542168620:task/my-nodejs-be-ecs/2eb425501c8a4e1d86667a91bbc3c796
// arn:aws:ecs:us-east-1:076542168620:task/my-nodejs-be-ecs/2eb425501c8a4e1d86667a91bbc3c796
//arn:aws:ecs:us-east-1:076542168620:task/my-nodejs-be-ecs/b6b269c0884e41ce9aabaebdb8f0d232
// arn:aws:ecs:us-east-1:076542168620:task/my-nodejs-be-ecs/b6b269c0884e41ce9aabaebdb8f0d232