const express = require('express');
const app = express();
const path = require('path');

const port= 8080;
app.set("views", path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home.ejs");
});
app.get('/rolldice', (req, res) => {
    res.render("rolldice.ejs");
});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});

app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
   const instaData = require("./data.json");
   const data = instaData[username];
   console.log(data);
   res.render("instagram.ejs",{data});
});
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/js')));