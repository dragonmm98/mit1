// Express  framework
const express = require ("express");
const app = express ();
const http = require("http");



// Kirish kodlari 
app.use(express.static("public"));
app.use(express.json());
app.use (express.urlencoded({extended:true}));

// Views Codes 
app.set ("views", "views");
app.set ("view engine","ejs");

// Ruterlar uchun ---Routng codes

app.get ("/", function(req,res){
    res.end (`<h1 style= color:red;> Hello MIT5</h1>`);
})
app.get ("/gift", function(req,res){
    res.end (`<h1 style = color:blue;background-color:red;font-size:100px;>You are inside of gift section</h1>`)
})

const server = http.createServer(app);

let PORT = 3000;
server.listen (PORT,function(){
    console.log (`The server is running successfully on port ${PORT}`);
})