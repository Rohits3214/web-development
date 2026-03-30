const express = require("express");
const app = express();
const mongoose =require('mongoose');
const path = require('path');
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main()
.then(() => {
    console.log("connected to database");
})   
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

 // index route

 app.get("/chats",async (req,res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
 });
// new chat route
 app.get("/chats/new", async (req,res) => {
    res.render("new.ejs");
 });

 //crreate chat route
 app.post("/chats", async (req,res) => {
    let {from,to,msg} = req.body;
    let newchat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at : new Date(),
    });
    newchat.save()
    .then((res) => {  
        console.log("chat created successfully");
    }  )
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});
   

    app.get("/",(req,res) => {
      res.send("root is working");

});

app.listen(8080,() => {
    console.log("server is running on port 8080");
});
