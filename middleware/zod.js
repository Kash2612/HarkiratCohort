const express= require("express");
const app= express();
// const zod= require("zod");

// const schema=zod.array(zod.number());

// {
//     email: string
//     password: atleast 8 char
//     country: "in" "us"
// }

// const schemaa= zod.object({
//     email:zod.string(),password: zod.string(),country:zod.literal("IN"). or (zod.literal("US"))
// })




app.use(express.json());

// app.post("/health-checkup", function(req,res){
//     const kidneys = req.body.kidneys;
//     const response= schema.safeParse(kidneys);
//     if(!response.success){
//         res.status(411).json({
//             msg:"invalid input"
//         })
//     }
//     else{
//         res.send({
//             response
//         })
//     }
// });


// global catches- error handling middlewares
// app.use(function(err,req,res,next){
//     res.json({
//         msg:"something is wrong"
//     });
// });

// app.listen(3000);




// Validat email and password using zod indivdually
const zod= require("zod");

function validateInput(obj){
    const schema= zod.object({
        email:zod.string().email(),
        password: zod.string().min(8)
    })

    const response= schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"kash@gmail.com",
    password: "12345678"
});


// to use zod for http server

app.post("/login", function(req,res){
    const response1= validateInput(req.body);
    if(!response.success){
        res.json({
            msg:"invalid input"
        })
        return;
    }
})