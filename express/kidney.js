const express= require("express");
const app= express();

app.use(express.json());


const user=[{
    name: "John",
    kidney:[{
        healthy: false
    }]
}]

app.get("/",function(req,res))