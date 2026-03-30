const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4} = require('uuid');


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "John Doe",
        content: "Hello, this is my first post!"
    },
    {
        id: uuidv4(),
        username: "Jane Smith",
        content: "Hi everyone, excited to be here!"
    },
    {
        id: uuidv4(),
        username: "Alice Johnson",
        content: "Just sharing some thoughts on this platform."
    },

];

app.get("/posts", (req, res) => {
    res.render("home.ejs",{posts});
});

app.get("/posts/new", (req, res) => {
    res.render("newpost.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content });
    res.redirect("/posts");

});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});
app.patch("/posts/:id",(req,res) => {
    let {id} =req.params;
    console.log(id);
    res.send("patch request working");
});
app.listen(port, () => {
    console.log("Server is running on port : 8080");
});