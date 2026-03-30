const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connected to database");
})   
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats =[
    {
    from : "neha",
    to : "priya",
    msg : "send me your exam sheets",
    created_at : new Date(),
 },
{
    from : "priya",
    to : "neha",
    msg : "sure, I will send them to you",
    created_at : new Date(),
 },
 {   from : "neha",
    to : "priya",
    msg : "thank you so much",
    created_at : new Date(),
 },
 {   from : "priya",
    to : "neha",
    msg : "no problem, happy to help",
    created_at : new Date(),
 },
];

Chat.insertMany(allChats);