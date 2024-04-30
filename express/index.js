// creating an http server
// express
// is express a node default library?=> no

const express= require("express");
const app= express();

function sum(n){
    if(n<0){
        ans=n;
    console.log("errrrr")

    }
    console.log("yayyy")
    // let ans=0;
    // for(let i=1;i<=n;i++){
    //     ans+=i;
    // }
    return ans;
}
app.get("/",function(req,res){
    const a= req.query.a;
    const ans= sum(a);
    res.send("hi there"+ans);
})
app.listen(3000);