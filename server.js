const http = require("http");
<<<<<<< HEAD
const mongodb = require ("mongodb");

let db;
=======
const fs = require("fs");

let user;
fs.readFile("database/user.json","utf8",(err,data)=>{
    if(err) {
        console.log ("ERROR:", err);
    } else {
        user=JSON.parse(data)
    }
});
>>>>>>> origin

const connectionToString = 
"mongodb+srv://notailgg:nYNmE3nSDWtuksYm@notailgg.sfp87tq.mongodb.net/";
mongodb.connect (
    connectionToString,
    {
      useNewUrlParser:true,
     useUnifiedTopology:true,
}, 
(err,client) =>{
     if (err) console.log("Error on Connection to MOngoDB");
else {
console.log ('COnnected SUccesfully');
module.exports = client;

<<<<<<< HEAD
    const app =require ("./app");
=======
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
app.get ("/author", (req,res)=>{
    res.render("author", {user:user});
})

>>>>>>> origin
const server = http.createServer(app);
let port= 3000;
server.listen(port,function (){
console.log (`The server is running successfully on port ${port},http://localhost:${port}`)
})
}    
}

 )