const mongoose= require("mongoose");

const express= require("express");
const app= express();

app.use(express.json())
mongoose.connect("mongodb+srv://kashgupta20:nOXJu4IVxMnPEGRX@cluster0.lm5xjgw.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String, email:String, password:String });

app.post("/signup", async function(req,res){
    const username=req.body.username;
    const password= req.body.password;
    const name= req.body.name;


    const existingUser= await User.findOne({email:username});

    if(existingUser){
        return res.status(400).send("Username already exists");
    }


} )

// const user= new user({ name: 'Kashish gupta', email: "Kashish@gmail.com", password: "123456" });



User.save();

// kitty.save().then(() => console.log('meow'));