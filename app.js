const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
//const store = require("./store.js");
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request,response){
  response.sendFile(__dirname + "/index.html");
});



app.listen(3009, function(){
  console.log("Server Started on port 3000");
});
