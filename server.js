// Express  framework
const express = require ("express");
const res = require ("express/lib/response");
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

app.post("/create-item", (req,res)=>{
    console.log (req.body);
    res.json({test: "sucess"});
})

app.get ("/", function (req,res){
    res.render("harid");
});

const server = http.createServer(app);

let PORT = 3000;
server.listen (PORT,function(){
    console.log (`The server is running successfully on port ${PORT}`);
});