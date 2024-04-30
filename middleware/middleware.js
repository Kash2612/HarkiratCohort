//  code without middlewares
// const express= require("express");

// const app= express();
// app.use(express.json());

// app.get("/health-checkup",function(req,res){
//     const username= req.header.username;
//     const password= req.header.password;
//     const kidneyNo= req.query.kidneyNo;

//     if(kidneyNo!=1 && kidneyNo!=2){
//         res.status(400).json({"msg":"kidney not valid"})
//         return
//     }
    
//     if(((username==="Kashish") && (password=== "pass"))){
//         res.status(400).json({"msg":"nothing"})
//         return    
//     }

    
//     res.json({"msg":"you are allowed"})

// });

// app.listen(3000);


// with middlewares
// const express= require("express");
// const app= express();
// app.use(express.json());

// function usermiddleware(req,res,next){
//     if(username!="kashish" || password!="pass"){
//         res.status(400).json({
//             msg:"wrong credentials"
//         });
//     }
//     else{
//         next();
//     }
// };

// function kidneymiddleware(req,res,next){
//     if(kidneyNo!=1 && kidneyNo!=2){
//         res.status(400).json({
//             msg:"kidney invalid"
//         });
//     }
//     else{
//         next();
//     }
// };

// app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){

//     res.send("kidney is fine");
// });

// app.listen(3000);

